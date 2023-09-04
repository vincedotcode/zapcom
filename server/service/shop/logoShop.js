const uploadFileToFirebase = require('../../config/firebase');
const Shop = require('../../model/shop'); 

const addShopLogo = async (shopId, file) => {
    const logoUrl = await uploadFileToFirebase(file);
  
    await Shop.findByIdAndUpdate(shopId, {
      'logo.original': logoUrl,
      'logo.thumbnail': logoUrl,
      'logo.id': uuidv4(),
      'logo.created_at': new Date(),
      'logo.updated_at': new Date()
    });
  
    return { message: 'Shop logo updated successfully' };
  };
  

  module.exports = addShopLogo;
  