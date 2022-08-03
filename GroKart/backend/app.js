let express=require("express");
let dbConnection=require("./config/dbConfig");
let shopRouter=require("./router/shopRouter");
let app=express();
let cors=require("cors");

dbConnection.connect();
app.use(express.json());
//app.use(express.static('./dist/gro-kart'));
app.use(cors());

app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE']
}))

//middleware
//http://localhost:9090/api/product

app.use("/api/grocery",shopRouter);
app.get ("/",(req,res)=>{
    res.send("Backend of grocery store");
})


app.listen(9090,()=>{
    console.log("server is up");
})

