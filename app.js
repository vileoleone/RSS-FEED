const express = require("express");
const Parser  = require ('rss-parser')
const app = express();

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const feedInfo = await feedParser()

    //   const headers = {
    //   Authorization: `Bearer ${accessToken}`,
    //   'Content-Type': 'application/json'
    // };
    // const result = await request.get('https://api.hubapi.com/contacts/v1/lists/all/contacts/all?count=1', {
    //   headers: headers
    // });

    // return JSON.parse(result).contacts[0];
  res.write(`<h2>FEED RSS</h2>`);



  res.end();
});

const feedParser = async () => {
  let parser = new Parser();
  const feed = await parser.parseURL('https://portal.who.int/eios/API/News/Monitoring/getBoardRssFeed?queryId=3906')
  console.log(feed)
}


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;