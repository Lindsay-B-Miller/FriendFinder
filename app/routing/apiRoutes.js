// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friend data
var friendsData = require("../data/friends.js");

// ===============================================================================
// Routing
module.exports = function (app) {
    // API GET Request
    // Below code handles when users "visit" a page.
    // When a user visits a link they are shown a JSON of the data in the table
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Request
    // Below code handles when a user submits a form and thus submits data to the server.
    // When a user submits form data (a JSON object) the JSON is pushed to the appropriatet JS array
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        // The "server" will respond to requests and let users know if they have a match
        if (friendsData.length > 1) {
            res.json(true);
        }
        else {
            res.json(false);
        }

    });

};