import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req:any,res:any) => {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });

}

export const signInUser = async (req:any,res:any) =>{
    const user = await prisma.user.findUnique(
        {
            where:{
                username:req.body.username
            }
        }
    )

    const passwordValid = await comparePasswords(req.body.password,user?.password)

    if (!passwordValid){
        res.status(401)
        res.json({message:"Invalid password"})
        return;
    }
}