var express = require('express'),
bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),
app         = express();

mongoose.connect("mongodb://localhost/restful-blog-app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//Mongoose Model Config
var blogSchema = new mongoose.Schema({
    title : String,
    image: String,
    body : String,
    created: {type: Date, default: Date.now}
})
var Blog = mongoose.model("Blog",blogSchema);
Blog.create({
    title : "Test Blog",
    image: "https://images.unsplash.com/photo-1590182180713-354f28fe68c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    body: "HELLO This is a blog post!"
});

// RESTful Routes




app.listen(process.env.PORT,process.env.IP,function() {
    console.log("Server is running !")
})