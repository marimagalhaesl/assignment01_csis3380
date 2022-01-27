const express = require ("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
    response.sendFile("index.html");
})

//final
app.listen(3000, function() {
    console.log("server up");
})