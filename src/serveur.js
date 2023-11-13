const express = require('express');
const path = require('path');
const fs = require('fs');
const {engine} = require ('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const ejs = require('ejs');



const PORT = process.env.PORT || 8080;
const lang = process.env.LANG.slice(0, 2);
//-------------------------------------------------------LOG DATABASE
(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("Connexion avec la base de donnée reussi");
    } catch (error){
        console.log(error.message);
    }
})();
//-------------------------------------------------------LOG DATABASE  

//-------------------------------------------------------Configure Handlebars
app.engine('hbs', engine({
        extname: 'hbs',
        defaultLayout:'main',
        layoutsDir: path.join(__dirname, 'views', 'layouts') 
    }));
app.set('view engine', 'hbs','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'../', 'public')));
app.use('/views', express.static(path.join(__dirname,'src', 'views')));

//--------------------------------------------------------------ROUTES
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/connexion', (_, res) => {
    res.render('connexion');
});
app.get('/blog', (req,res)=>{
    res.render('blog');
})

app.get('/output', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'public', 'css', 'output.css'));
});
app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'public', 'css', 'style.css'));
});
app.get('/mediaquerry', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'public', 'css', 'mediaquerry.css'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'public', 'js', 'js.js'));
});
app.get('/CV-DELON', (req, res) => {
    res.sendFile(path.join(__dirname,'views', 'CV-DELON.pdf'));
});
app.get('/*', (_,res) => {
    res.render(path.join(__dirname,'views','404.hbs'));
})
app.get('/', (req, res) => {
    const message = req.query.message || '';
    res.render('index', { message });
});


app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { nom, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'djplebob32@gmail.com',
            pass: 'ejws zrfb djfi qyiu'
        }
    });

    // Paramètres du mail
    const mailOptions = {
        from: 'djplebob32@gmail.com', // Mettez votre adresse e-mail Gmail
        to: 'jeanfr12@live.fr', // Mettez l'adresse e-mail de réception
        subject: 'Portfolio contact',
        text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoi du mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email envoyé :', info.response);
        res.redirect('/?message=Email%20envoyé%20avec%20succès'); 
    });
});


app.listen(PORT, () => {
    console.log(`Le serveur est en marche sur le port ${PORT}`);
});

