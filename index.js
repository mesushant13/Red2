import express,{request, response, Router} from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./route/routes.js";

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/users', route);

app.get('/',(request,response)=>{
    response.send('Hello to Redpositive');
});

const PORT = 5000;
const URL = 'mongodb+srv://redpostive:redpostive12@cluster0.in8ph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {


    app.listen(PORT, () => {
        console.log(`server is running succesfully on Port ${PORT}`);
    });
}).catch((error) => {
    console.log('Error:', error.message)
})