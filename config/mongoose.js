const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

launch().catch(err => console.log(`Error talking to MongoDB : ${err}`));

async function launch(){
    await mongoose.connect("mongodb+srv://sanketbabar344:Sanket2025@cluster0.sqjyqij.mongodb.net/");
}

const db = mongoose.connection.once('open', () => {
    console.log(`Data flowing through Mongo...`);
});

module.exports = db;