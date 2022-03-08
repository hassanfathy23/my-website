const express = require("express")
const app = express()
const port = 5000

app.use(express.static('public'))

app.get("/", (req, res)=> {
    res.sendFile("index.html", {root: 'public'})
});

app.get("/about", (req, res)=> {
    res.sendFile('about.html', { root: 'public' })
});

app.get("/contact", (req, res)=> {
    res.sendFile('contact.html', {root: 'public'})
});




app.listen(port, (req, res)=> {
    console.log("server is listening on port 5000...");
});