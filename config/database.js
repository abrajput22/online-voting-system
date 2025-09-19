const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const password = encodeURIComponent('ram@20042004');
        const uri = `mongodb+srv://abhishek_rajput:${password}@cluster0.kvalswb.mongodb.net/voting_system?retryWrites=true&w=majority&appName=Cluster0`;
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; 