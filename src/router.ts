import {Router} from "express"

const router = Router()

/*
Product
*/
router.get("product",(req,res)=>{
    res.json({message:"hello"})
})
router.post("product",()=>{})
router.put("product/:id",()=>{})
router.delete("product/:id",()=>{})

/*
update
*/
router.get("update",()=>{})
router.post("update",()=>{})
router.put("update/:id",()=>{})
router.delete("update/:id",()=>{})


/*
updatepoints
*/
router.get("updatepoint",()=>{})
router.post("updatepoint", () => {});
router.put("updatepoint/:id", () => {});
router.delete("updatepoint/:id",()=>{})

export default router;