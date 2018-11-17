const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const activitySeed = [
  // {
  //   title: "The Dead Zone",
  //   author: "Stephen King",
  //   synopsis:
  //     "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
  //   date: new Date(Date.now())
  // },
  {
    event: "Gallagher Way",
    category: "Outdoor",
    description:
      "Gallagher Way, Wrigleyville's town square, is brought to you by — and named for — Gallagher. As part of the Ricketts family's commitment to be a good neighbor and Gallagher's desire to contribute to the community, Gallagher Way offers year-round public events including movies, music, farmers markets and more. Gallagher Way is surrounded by true Chicago dining options, from elevated fare to street tacos to ice cream to barbecue. Hotel Zachary at Gallagher Way is a boutique hotel offering an authentic neighborhood experience for travelers and locals in the know.",
    address: "3635 N Clark St \nChicago, IL 60613",
    website: "https://www.gallagherway.com/",
    date: new Date(Date.now())
  },
  {	
    event: "The 606",
    category: "Outdoor",
    description:
      "The 606 brings together arts, history, design, trails for bikers, runners, and walkers, event spaces, alternative transportation avenues, and green, open space for neighbors, Chicagoans, and the world. ",
    address: "The 606 runs along the Bloomingdale Trail (1800N) for 2.7 miles between Ashland (1600W) and Ridgeway (3750W). ",
    website: "https://www.the606.org/",
    date: new Date(Date.now())
  },
  {
    event: "Lincoln Park Zoo",
    category: "Outdoor",
    description:
      "Established in 1868, this 35-acre, beautifully landscaped zoo is one of America's last free-admission zoos.",
    address: "2001 N Clark St \n Chicago, IL 60614",
    website: "https://www.lpzoo.org/",
    date: new Date(Date.now())
  },
  {
    event: "Grant Park",
    category: "Outdoor",
    description:
      "Proudly referred to as 'Chicagos Front Yard', Grant Park is a 319-acre public park located in Chicagos central business district in the Loop Community area. Grant Parks most notable features include Millennium Park, Maggie Daley Park, Buckingham Fountain, the Art Institute of Chicago and the Museum Campus. ",
    address: "Columbus Drive \n Chicago, IL 60601",
    website: "https://www.chicagoparkdistrict.com/parks-facilities/grant-park",
    date: new Date(Date.now())
  },
  {
    event: "Millennium Park",
    category: "Outdoor",
    description:
      "Millennium Park is a public park located in the Loop community area of Chicago in Illinois, US, and originally intended to celebrate the third millennium. It is a prominent civic center near the city's Lake Michigan shoreline that covers a 24.5-acre section of northwestern Grant Park.",
    address: "201 E. Randolph St \n Chicago, IL 60601",
    website: "https://www.cityofchicago.org/city/en/depts/dca/supp_info/millennium_park.html",
    date: new Date(Date.now())
  }
];


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
