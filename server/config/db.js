const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@zapcom.yjlt3mr.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
