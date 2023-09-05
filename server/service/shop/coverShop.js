const { uploadToFirebase } = require('../../config/firebase');
const Shop = require('../../model/shop'); 
const { v4: uuidv4 } = require('uuid');

const addCoverImage = async (shopId, file) => {
    try {
        const response = await uploadToFirebase(file.buffer, file.originalname);
        
        if (!response.success) {
            throw new Error(response.message || 'Error uploading to Firebase');
        }
        const coverImageUrl = response.url;
        await Shop.findByIdAndUpdate(shopId, {
            'cover_image.original': coverImageUrl,
            'cover_image.thumbnail': coverImageUrl,
            'cover_image.id': uuidv4(),
            'cover_image.created_at': new Date(),
            'cover_image.updated_at': new Date()
        });
        return { message: 'Cover image updated successfully' };
    } catch (error) {
        console.error('Error updating cover image:', error);
        return { message: 'Error updating cover image', success: false, error };
    }
};

module.exports = addCoverImage;
