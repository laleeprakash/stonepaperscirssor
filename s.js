const express=require("express")
const zod=require("zod")
const app=express()
const schema =zod.array(zod.number())
app.use(express.json())
app
