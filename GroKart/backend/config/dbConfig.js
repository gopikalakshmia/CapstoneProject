let mongoClient=require("mongodb").MongoClient;
let url="mongodb+srv://gopikalakshmia:parukutty@cluster0.hj6jd.mongodb.net/?retryWrites=true&w=majority";
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