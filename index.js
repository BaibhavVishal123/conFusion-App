const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://34.224.168.214:8000/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({
            name: 'Uthapizza',
            description: 'Test'
        })
        .then((dish) => {
            console.log(dish);
            return Dishes.findByIdAndUpdate(dish._id, { $set: { description: 'Updated Test' } }, { new: true })
                .exec();
        })
        .then((dish) => {
            console.log(dish);
            return db.collection('dishes').drop();
        })
        .then(() => {
            return db.close();
        })
        .catch((err) => {});
});