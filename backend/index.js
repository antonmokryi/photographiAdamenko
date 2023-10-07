import express from 'express'
import ejs from 'ejs'
import multer from 'multer'; // upload file
import data from './data.js';
import mongoose, { Schema } from 'mongoose';


let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
mongoose.connect('mongodb+srv://user:user@cluster0.eqeip45.mongodb.net/?retryWrites=true&w=majority');
let schema = new Schema({
    title: String,
    gallery: Array,
    workStyle: Array,
    contact: Array,
    number: Array,
    email: String,
    textAboutMe: Object,
    swiper: Array,
  })

  let db =  mongoose.model('admin', schema)

// base setting activation
let storage = multer.diskStorage({
    destination: (req, file, cb) => {

        console.log(req.body )


        cb(null, 'data/img/portfolio/')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + (Date.now()).toString() + '.jpg')
    }
});

// portfolio main 



let upload = multer({storage: storage});





app.post('/upload', upload.single('file'), (req, res)=>{
    console.log(req.body)
    res.status(200).send('ok')
})

app.get('/', (req, res)=>{
    res.render('index', {data: data})
})

app.get('/admin', (req, res) =>{
    let text = '';
    for (let i = 0; i < data.textAboutMe.text.length; i++) {
        text +=data.textAboutMe.text[i] 
    }
    let category = [];
    for (let i = 0; i < data.swiper.length; i++) {
        if (!category.includes(data.swiper[i].category)) {
            category.push( data.swiper[i].category)
        }
    }
    
    res.render('admin', {aboutMe: text, data: data, category: category})
})
app.get('/portfolio', (req, res) =>{
    res.render('portfolio', {data: data})
})

app.listen(3000, (error)=>{
    console.log('error')
})