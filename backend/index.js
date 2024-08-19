const connectToMongo=require('./db')
const express=require('express')
const cors=require('cors')
const path=require("path")
connectToMongo()

const app=express()
const port=8000
app.use(express.json());
const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../build")
app.use(express.static(buildpath));
app.use(cors({
    "origin":"*"
}));

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.get('/',(req,res)=>{
//     res.send("hello psk")
// })

app.listen(port,()=>{
    console.log(`ebook http://localhost:${port}`)
})
