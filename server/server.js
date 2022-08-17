const express = require('express');
const app = express();
const cors = require('cors')
const {MongoClient} = require('mongodb')
const createRouter = require('./helpers/create_router') 

app.use(cors());
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('guests_hub');
    const hotelCollection = db.collection('guests');
    const hotelRouter = createRouter(hotelCollection);
    app.use('/api/guests', hotelRouter);
})
.catch(console.error); 


app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});

