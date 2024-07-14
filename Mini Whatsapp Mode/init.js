const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("Connection scuuessfull");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let chats=[{
    from:"Neha",
    to:"Rahul",
    msg:"Send me notes",
    createAt:new Date(),//UTC
},
{
    from:"Abhishek",
    to:"Sarthak",
    msg:"Hello Buddy ",
    createAt:new Date(),//UTC
},
{
    from:"Abhinav",
    to:"Adam",
    msg:"Hey there! Whasapp",
    createAt:new Date(),//UTC
},
{
    from:"Bdam",
    to:"Dom",
    msg:"Hello Dom How are you ?",
    createAt:new Date(),//UTC
},
{
    from:"Shiv",
    to:"Harry",
    msg:"teach me JS",
    createAt:new Date(),//UTC
},
{
    from:"Even",
    to:"Lewis",
    msg:"Go Down",
    createAt:new Date(),//UTC
}];

Chat.insertMany(chats);
