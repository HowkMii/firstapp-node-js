var app = express();
app.set("port", process.env.PORT || 3000 );
app.listen(app.get("port"), function(){

    console.log("server started on port" + app.get("port"));
})