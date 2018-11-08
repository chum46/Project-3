// var express = require("express");
// var mongojs = require("mongojs");

// var app = express();

// var databaseUrl = "freeEvents";
// var collections = ["events"];

// var db = mongojs(databaseUrl, collections);

// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (0 !== currentIndex) {

//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }

// app.get("/all", function (req, res) {
//     db.events.find({}, function (err, found) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             const dataArray = found;
//             const newDataArray = [];
//             shuffle(dataArray)
//             for (var i = 0; i < 5; i++) {
//                 newDataArray.push(dataArray[i])
//             }
//             res.json(newDataArray);
//         }
//     });
// });

// app.listen(3000, function () {
//     console.log("App running on port 3000!");
// });
