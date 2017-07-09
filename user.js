var user = {
  name: 'Beth',
  location: 'Provo',
  occupations: ['seamstress', 'jeweler', 'web dev'],
  hobbies: [
    {
      name: 'Rock Climbing',
      type: 'active'
    },
    {
      name: 'Videogames',
      type: 'geeky'
    },
    {
      name: 'Cooking',
      type: 'fattening'
    }
  ],
  family: [
    {
      name: 'David',
      relation: 'husband',
      gender: 'male'
    },
    {
      name: 'Meggy',
      relation: 'sister',
      gender: 'female'
    },{
      name: 'Hannah',
      relation: 'sister-in-law',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Smashburger',
      type: 'american',
      rating: 5
    },
    {
      name: 'Zupas',
      type: 'cafe',
      rating: 4
    },
    {
      name: 'Olive Garden',
      type: '"italian"',
      rating: 2
    }
  ]
};
module.exports = user;