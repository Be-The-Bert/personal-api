var user = require('../../user.js');
var secrets = require('../../secrets.js');

module.exports = {
    name: (req, res, next) => {
        res.send({
            name: user.name
        })
    },
    changeName: (req, res, next) => {
        user.name = req.body.name
        res.send(user);
    },
    location: (req, res, next) => {
        res.send({
            location: user.location
        })
    },
    changeLocation: (req, res) => {
        user.location = req.body.location;
        res.send(user);
    },
    occupations: (req, res, next) => {
        let occupations = [...user.occupations];
        if (!req.query.order) {
            res.send({
                occupations: occupations
            })
        } else if (req.query.order == 'desc') {
            occupations.sort();
            res.send({
                occupations: occupations
            })
        } else if (req.query.order == 'asc') {
            occupations.sort().reverse();
            res.send({
                occupations: occupations
            })
        }
    },
    addOccupation: (req, res) => {
        user.occupations.push(req.body.occupation);
        res.send(user);
    },
    latestOccupation: (req, res, next) => {
        res.send({
            latestOccupation: user.occupations.slice(user.occupations.length - 1)
        })
    },
    hobbies: (req, res, next) => {
        if (req.params.type) {
            let answer = user.hobbies.filter((hobby) => hobby.type === req.params.type);
            res.send({
                hobbies: answer
            })
        } else {
            res.send({
                hobbies: user.hobbies
            }) 
        }
    },
    addHobby: (req, res) => {
        user.hobbies.push(req.body);
        res.send(user)
    },
    family: (req, res, next) => {
        if (!req.query.relation) {
            if (req.params.gender) {
                let answer = user.family.filter((member) => member.gender === req.params.gender);
                res.send({
                    family: answer
                })
            } else {
                res.send({
                    family: user.family
                })
            }
        } else {
            let answer = user.family.filter((member) => member.relation === req.query.relation);
            res.send({
                family: answer
            })
        }
    },
    addFamily: (req, res) => {
        user.family.push(req.body);
        res.send(user);
    },
    restaurants: (req, res, next) => {
        if (!req.query.rating) {
            if (req.params.name) {
                let answer = user.restaurants.filter((restaurant) => restaurant.name === req.params.name);
                res.send({
                    restaurants: answer
                })
            } else {
                res.send({
                    restaurants: user.restaurants
                })
            }
        } else {
            let tempQuery = req.query.rating.split(':');
            if (tempQuery[0] === 'gte') {
                let answer = user.restaurants.filter((restaurant) => restaurant.rating >= tempQuery[1]);
                res.send({
                    restaurants: answer
                })
            } else {
                res.status(404).json('oops');
            }
        }
    },
    addRestaurant: (req, res) => {
        user.restaurants.push(req.body);
        res.send(user);
    },
    secrets: (req, res) => {
        res.send(secrets);
    }
}