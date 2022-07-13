let shopRepository=require("../repository/shopRepository");

exports.findAllproduct=async(req,res)=>{

    let products=await shopRepository.findAllproducts();
    res.json(products);
}

exports.findProduct=async(req,res)=>{
let id= req.body;
try{
    let product=await shopRepository.findproduct(id);
    res.json(product);
}
catch(err){
    res.send(err);
}
}




//user
exports.storeUser=async(req,res)=>{
let user=req.body;
//console.log(user)
try{
    let result=await shopRepository.storeUser(user);
    
    res.send(result);
}
   catch(EX){
       res.send(EX);
   } 

}

exports.userValidation=async(req,res)=>{
    let user=req.body;
    try{
        let result=await shopRepository.userValidation(user);
        
        res.json(result);
    }
       catch(EX){
           res.send(EX);
       } 
    
}


//cart

exports.addtoCart=async(req,res)=>{
    let cart=req.body;
    //console.log(cart);
    
    try{
        let result=await shopRepository.addtoCart(cart);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}


exports.updateQuantityCart=async(req,res)=>{
    let cart=req.body;
    //console.log(cart);
    
    try{
        let result=await shopRepository.updateQuantityCart(cart);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.findCartByUserId=async(req,res)=>{
    let userid=req.body;
   // console.log(userid);
    
    try{
        let result=await shopRepository.findCartByUserId(userid);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

//wishlist

exports.addtoWishlist=async(req,res)=>{
    let wishlist=req.body;
   // console.log(wishlist);
    
    try{
        let result=await shopRepository.addtoWishlist(wishlist);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.findWishlistByUserIdgroid=async(req,res)=>{
    let wishlist=req.body;
    //console.log(userid);
    
    try{
        let result=await shopRepository.findWishlistByUserIdgroid(wishlist);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.findWishlistByUserId=async(req,res)=>{
    let userid=req.body;
    console.log(userid);
    
    try{
        let result=await shopRepository.findWishlistByUserId(userid);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.removefromWishlist=async(req,res)=>{
    let wishlist=req.body;
    //console.log(userid);
    
    try{
        let result=await shopRepository.removefromWishlist(wishlist);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

//admin

exports.findAllUsers=async(req,res)=>{
    let users=await shopRepository.findAllUsers();
    res.json(users);
}

exports.deleteuser=async(req,res)=>{
    let user=req.body;
    //console.log(userid);
    
    try{
        let result=await shopRepository.deleteuser(user);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.findaUser=async(req,res)=>{
    let userid=req.body;
    //console.log(userid);
    
    try{
        let result=await shopRepository.findaUser(userid);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.updateUser=async(req,res)=>{
    let user=req.body;
    console.log(user);
    
    try{
        let result=await shopRepository.updateUser(user);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.deletegro=async(req,res)=>{
    let gro=req.body;
    //console.log(userid);
    
    try{
        let result=await shopRepository.deletegro(gro);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}

exports.addnewgrocery=async(req,res)=>{
    let gro=req.body;
   // console.log(wishlist);
    
    try{
        let result=await shopRepository.addnewgrocery(gro);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}


exports.updateGrocery=async(req,res)=>{
    let gro=req.body;
    console.log(gro);
    
    try{
        let result=await shopRepository.updateGrocery(gro);
        res.send(result);
    }
    catch(Ex){
        res.send(Ex);
    }
}
