const express = require('express')
const app = express()
const userPage = require('./user')

// for static web page
// app.use(express.static('public'))

app.set("view engine","ejs")

app.use(express.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    response.send(200)

    // render static web page
    // response.render('index')
})

app.use('/user',userPage)


app.listen(3800)