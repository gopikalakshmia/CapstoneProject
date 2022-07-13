let dbConnection=require("../config/dbConfig");


exports.findAllproducts=()=>{
   // let product=dbConnection.getCollection("product");
    return dbConnection.getCollection("grocery").find({}).toArray();
}
exports.findproduct=(id)=>{
    var mongo = require('mongodb');
var o_id = new mongo.ObjectId(id);  
    console.log(id);
return dbConnection.getCollection("grocery").find({_id:o_id}).toArray();
}

//user

exports.storeUser=(user)=>{

    return dbConnection.getCollection("user").insertOne(user);
}

exports.userValidation=(user)=>{
console.log(user.password.toString());
    return dbConnection.getCollection("user").find({email:user.email,password:user.password}).toArray();
}

//cart


exports.addtoCart=(cart)=>{
    return dbConnection.getCollection("cart").insertOne(cart);
}
exports.updateQuantityCart=(cart)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(cart._id); 
    if(cart.quantity>=1)
    return dbConnection.getCollection("cart").updateOne({_id:o_id},{"$set":{quantity:cart.quantity}});
    else
    return dbConnection.getCollection("cart").deleteOne({_id:o_id});

}

exports.findCartByUserId=(userid)=>{
    return dbConnection.getCollection("cart").find({userid:userid.userid}).toArray();
}
    // db.cart.aggregate([{$match:{userid:"62aa5bd4d03735d238626b76"}},{"$group":{_id:"$groid",count:{$sum:1}}}])


//wishlist

exports.addtoWishlist=(wishlist)=>{
    return dbConnection.getCollection("wishlist").insertOne(wishlist);
}

exports.findWishlistByUserIdgroid=(wishlist)=>{
    return dbConnection.getCollection("wishlist").find({userid:wishlist.userid,groid:wishlist.groid}).toArray();
}


exports.findWishlistByUserId=(userid)=>{
    return dbConnection.getCollection("wishlist").find({userid:userid.userid}).toArray();
}

exports.removefromWishlist=(wishlist)=>{
    return dbConnection.getCollection("wishlist").deleteOne({userid:wishlist.userid,groid:wishlist.groid});
}

//admin

exports.findAllUsers=()=>{
    return dbConnection.getCollection("user").find({}).toArray();
}


exports.deleteuser=(user)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(user._id); 
    return dbConnection.getCollection("user").deleteOne({_id:o_id});
}

exports.findaUser=(userid)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(userid.userid);
    return dbConnection.getCollection("user").find({_id:o_id}).toArray();
}

exports.updateUser=(user)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(user._id); 
    return dbConnection.getCollection("user").updateOne({_id:o_id},{"$set":{fname:user.fname,lname:user.lname,email:user.email}});
   

}

exports.deletegro=(gro)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(gro._id); 
    //delete grocery from cart
    dbConnection.getCollection("cart").deleteOne({groid:gro._id});
    //delete from wishlist
    dbConnection.getCollection("wishlist").deleteOne({groid:gro._id});
    return dbConnection.getCollection("grocery").deleteOne({_id:o_id});
}

exports.addnewgrocery=(gro)=>{
    return dbConnection.getCollection("grocery").insertOne(gro);
}

exports.updateGrocery=(gro)=>{
    var mongo = require('mongodb');
    var o_id = new mongo.ObjectId(gro._id); 
    return dbConnection.getCollection("grocery").updateOne({_id:o_id},{"$set":{title:gro.title,desc:gro.desc,price:gro.price,imgsrc:gro.imgsrc,category:gro.category}});
   

}