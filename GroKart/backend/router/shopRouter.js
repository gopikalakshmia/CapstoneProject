let express=require ("express");
let router=express.Router();
let shopController=require("../controller/shopController");


router.get("/findGrocery",shopController.findAllproduct);
router.put("/findaGrocery",shopController.findProduct);
// router.post ("/storeProduct",productController.storeProduct);
// router.delete ("/deleteById/:pid",productController.deleteById);
// router.put ("/updateProduct",productController.updateProduct);

//user
router.put("/userValidation",shopController.userValidation);
router.post("/storeUser",shopController.storeUser);


//cart
router.post("/addtoCart",shopController.addtoCart);
router.put("/updateQuantityCart",shopController.updateQuantityCart);
router.put("/findCartByUserId",shopController.findCartByUserId);


//wishlist
router.post("/addtoWishlist",shopController.addtoWishlist);
router.put("/findWishlistByUserIdgroid",shopController.findWishlistByUserIdgroid);
router.put("/findWishlistByUserId",shopController.findWishlistByUserId);
router.put("/removefromWishlist",shopController.removefromWishlist);


//admin
router.get("/findAllUsers",shopController.findAllUsers);
router.put("/deleteuser",shopController.deleteuser);
router.put("/findaUser",shopController.findaUser);
router.put("/updateUser",shopController.updateUser);

router.put("/deletegro",shopController.deletegro);
router.post("/addnewgrocery",shopController.addnewgrocery);
router.put("/updateGrocery",shopController.updateGrocery);
module.exports=router;

