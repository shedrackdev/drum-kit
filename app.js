const express= require("express");
const bodyParser= require("body-parser");
const playSound= require("play-sound")(opts={});

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.post("/",(req,res)=>{
      const buttonClicked=req.body.p;
      switch (buttonClicked) {
        case "drumW":
            playSound.play('sound/play1.wav');
            break;

        case "drumA":
            playSound.play('sound/play2.wav');
            break;

        case "drumS":
            playSound.play('sound/play3.wav');
            break;

        case "drumD":
            playSound.play('sound/play4.wav');
            break;
    
        case "drumJ":
            playSound.play('sound/key16.ogg');
            break;
    
        case "drumK":
            playSound.play('sound/key15.ogg');
            break;
    
        case "drumI":
            playSound.play('sound/play6.wav');
            break;

        default:
            console.log(new Error);
            break;
    }
    res.sendFile(__dirname+"/index.html");
})





const port= 3000 || Process.env.PORT;
app.listen(port,()=>{
    console.log(`listening on port ${ port }`);
})