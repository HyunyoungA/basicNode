const express = require('express')
const app = express();
const PORT = process.env.PORT || 8001;//process.env.PORT : 내가설정한 포트번호가 없으면 8001로 하겠다. 앞이 우선순위.
const path = require('path');
const notice = require('./routes/notice')

app.use('/notice', notice);
app.use(express.static( path.join(__dirname, 'public')))

app.get('/',function(request, response){
    response.sendFile( path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, function(){
    console.log(`server started on PORT ${PORT}`)
});