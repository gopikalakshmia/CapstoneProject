let mongoClient=require("mongodb").MongoClient;
let url="mongodb://localhost:27017/";
let dbClient;

//exporting connect function
exports.connect=()=>{
    mongoClient.connect(url).then(res=>{
       console.log("db connected succesfully");
       console.log(res);
        dbClient=res;
    }).catch(err=>{
        console.log(err);
    })
    
}

exports.getCollection=(name)=>{
    return dbClient.db("capstone").collection(name);
}