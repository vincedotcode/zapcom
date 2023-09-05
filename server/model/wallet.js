const mongoose = require('mongoose');

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['credit', 'debit'],
    required: true
  },
  description: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Wallet Schema
const walletSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  shopId: {
    type: String,
    required: true,
    index: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  transactions: [transactionSchema]
}, { timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
