const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.name);
app.get('/api/location', mainCtrl.location);
app.get('/api/occupations', mainCtrl.occupations);
app.get('/api/occupations/latest', mainCtrl.latestOccupation);
app.get('/api/hobbies', mainCtrl.hobbies);
app.get('/api/hobbies/:type', mainCtrl.hobbies);
app.get('/api/family', mainCtrl.family);
app.get('/api/family/:gender', mainCtrl.family);
app.get('/api/restaurants', mainCtrl.restaurants);
app.get('/api/restaurants/:name', mainCtrl.restaurants);

app.put('/api/name', mainCtrl.changeName);
app.put('/api/location', mainCtrl.changeLocation);
app.post('/api/hobbies', mainCtrl.addHobby);
app.post('/api/occupations/', mainCtrl.addOccupation);
app.post('/api/family', mainCtrl.addFamily);
app.post('/api/restaurants', mainCtrl.addRestaurant);

app.get('/api/secrets/:username/:pin', middleware.verifyUser, mainCtrl.secrets);

app.listen(3000, ()=>{
    console.log('server running on 3000');
});