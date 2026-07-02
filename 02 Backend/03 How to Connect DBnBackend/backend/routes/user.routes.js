import express, { Router } from "express"
import { createUser, getAllUsers, get_user_by_name, update_name_by_id, delete_user_by_id  } from "../controllers/user.controllers.js"
import { home } from "../controllers/user.controllers.js"
let userRouter = express(Router)

userRouter.get("/",home )
userRouter.get("/get_all_users", getAllUsers )
userRouter.get("/get_user/:username", get_user_by_name )

userRouter.post("/create-user",createUser )

userRouter.put("/update_name/:id", update_name_by_id )
userRouter.delete("/delete_user/:id", delete_user_by_id )


export default userRouter