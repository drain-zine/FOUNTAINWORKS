const express = require("express");
const { static } = require("express");
const app = express();
const port = process.env.PORT || 5000;
const root = "/fountain"

app.listen(port, () => {
    console.log(`[INFO] Listening on port ${port}...`);
});


// ROUTES
app.get(`${root}/connect`, (req, res) => {
    res.send({ data: 'success' });
  });

app.use(`${root}/all_images`, static('assets'));
