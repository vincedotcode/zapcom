const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');
const productCategoryRoutes = require('./routes/productCategory');
const productRoutes = require('./routes/product');
const connectDB = require('./config/db');
const app = express();

require('./config/firebase.js');

connectDB();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'AI SaaS ZapCom',
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Authentication routes
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/product-category', productCategoryRoutes);
app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log('Server running ' + PORT);
});
