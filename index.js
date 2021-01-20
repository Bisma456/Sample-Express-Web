const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
    
    const PORT = 4000;

    app.use(express.static(path.join(__dirname,'public')))
    app.use(bodyParser.urlencoded({ extended: true}));
    app.listen(PORT, (req,res)=>{
        console.log('server is running at port:', PORT)
    })
    let users = [
        {name:'bisma',id:1,email:'bisma@gmail.com',password:'1111'},
        {name:'seema',id:1,email:'seema@gmail.com',password:'2222'}    
    ]
 
    app.get("/", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
        res.sendFile(path.join(__dirname, 'public','index.html'))
    })
    app.get("/aboutus", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
        res.sendFile(path.join(__dirname, 'public','aboutus.html'))
    })

    app.get("/contactus", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
        res.sendFile(path.join(__dirname, 'public','contactus.html'))
    })
    app.get("/signup", (req,res)=>{
        // res.send('<h2>AboutUs<h2>')
          res.sendFile(path.join(__dirname, 'registration','signup.html'))
    })
    app.post('/signup',(req,res)=>{
        // res.send(req.body)
       // console.log(req.body)
       let {email, name, password} = req.body
       let found = users.some((item)=>item.email == email)
       if(found){
        //    res.send('<h1>User already existed</h1>')
        res.redirect('/login')
       } else{
           users.push({name,email,password,id:users.length+1})
          // res.send('user added')
          res.sendFile(path.join(__dirname, 'registration','login.html'))
        // res.redirect('/login')
       }
     
     })

    app.get("/login", (req,res)=>{
      
        res.sendFile(path.join(__dirname, 'registration','login.html'))
    })
    app.post('/login',(req,res)=>{
        // res.send(req.body.email);
        let {email, name, password} = req.body
        let found = users.some((item)=>item.email == email)
        if(found){
         //    res.send('<h1>User already existed</h1>')
         res.redirect('/')
        } else{
            users.push({name,email,password,id:users.length+1})
           res.send('user added')
        //    res.sendFile(path.join(__dirname, 'registration','login.html'))
         res.redirect('/signup')
        }
      
      })
    

   

  app.get("/terms", (req,res)=>{
      res.sendFile(path.join(__dirname, 'registration','Terms.html'))
  })
