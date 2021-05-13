const functions = require("firebase-functions");
let Parser = require('rss-parser');
let parser = new Parser();

exports.helloWorld = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    let feed = await parser.parseURL('https://news.ycombinator.com/rss');
    response.send({
        feed: feed.items
    });
});
