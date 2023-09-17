const Product = require('../../model/product'); // Adjust the path as necessary
const OpenAI = require('openai').default;
require('dotenv').config();
const openai = new OpenAI({ api_key: process.env.OPENAI_API_KEY });

const getAllProducts = async () => {
    try {
        const products = await Product.find({});
        return products.map(product => ({
            role: 'system',
            content: `Product: ${product.name}, Description: ${product.description}, image: ${product.images[0]?.url}, price: ${product.price}`
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products: ' + error.message);
    }
};

const analyzeUserQuery = async (userQuery, productData) => {
    try {
        const messages = [
            ...productData,
            { role: 'user', content: userQuery + '\n when giving me the data, give it to me in 2 parts, 1 should be message which includes your response and the other should be JSON which includes any json format you can return'  }
        ];

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        });
        
        console.log(response.choices[0].message)
        const analysisResult = response.choices[0].message.content;

        return analysisResult;
    } catch (error) {
        console.error('Error analyzing user query:', error);
        throw new Error('Error analyzing user query: ' + error.message);
    }
};

const recommendProducts = async (analysisResult) => {
    try {
        // Match product names from the analysisResult
        const productNameMatches = analysisResult.match(/product: (.*?)(, |$)/g);
        
        if (!productNameMatches) {
            return { message: analysisResult, products: [] };
        }
        
        // Extracting product names
        const productNames = productNameMatches.map(productString => {
            const match = /Product: (.*?)(, |$)/.exec(productString);
            return match[1];
        });
        
        console.log('Extracted Product Names:', productNames);

        // Fetching matching products from the database
        const products = await Product.find({ 
            name: { 
                $in: productNames.map(name => new RegExp('^' + name + '$', 'i')) 
            } 
        });

        if(products.length === 0) {
            return { message: "No products found in the database matching the descriptions", products: [] };
        }
        
        return { message: analysisResult, products };
    } catch (error) {
        console.error('Error recommending products:', error);
        throw new Error('Error recommending products: ' + error.message);
    }
};


const getRecommendations = async (userQuery) => {
    try {
        const productData = await getAllProducts();
        const analysisResult = await analyzeUserQuery(userQuery, productData);
        const recommendedProducts = await recommendProducts(analysisResult);

        return recommendedProducts;
    } catch (error) {
        console.error('Error getting recommendations:', error);
        throw new Error('Error getting recommendations: ' + error.message);
    }
};

module.exports = {
    getAllProducts,
    analyzeUserQuery,
    recommendProducts,
    getRecommendations,
};
