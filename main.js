var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://test:test@cluster0.fzh35.mongodb.net/janith";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("janith");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name+""+result.address);
        db.close();
      });
  });