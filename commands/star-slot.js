const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const Canvas = require("canvas"),
  client = new Discord.Client();
const jsonfile = require('jsonfile')
const file2 = './cfg/config2.json'
const db = require('quick.db')
const { registerFont, createCanvas } = require('canvas')
registerFont("American-Captain.otf", { family: "American-Captain" });
module.exports.run = async (client, message, args) => {
        //     if(!message.member.roles.cache.has("929088777228517476")) return message.channel.send('Yetkin yok')
          //    if(!message.member.roles.cache.has("910284840396533830")) return message.channel.send('Yetkin yok')
            //  if(!message.member.roles.cache.has("928386114052567051")) return message.channel.send('Yetkin yok')
            
message.channel.send("**Tablo Hazırlanıyor Lütfen Bekleyin**")
  
        //        if(!message.member.roles.cache.has(`${ayarlar.rol}`)) return message.channel.send('Yetkin yok')

  
  
  
  //            if(!message.member.roles.cache.has("927246681064497184")) return message.channel.send('Yetkin yok')

//  const canvas = Canvas.createCanvas(400, 115);
  const canvas = Canvas.createCanvas(1910, 1080);
  const ctx = canvas.getContext("2d");
 
  let msgContent = message.content.split("\n")
let staki1 = msgContent[1] || " "
let staki2 = msgContent[2] || " "
let staki3 = msgContent[3] || " "
let staki4 = msgContent[4] || " "
let staki5 = msgContent[5] || " "
let staki6 = msgContent[6] || " "
let staki7 = msgContent[7] || " "
let staki8 = msgContent[8] || " "
let staki9 = msgContent[9] || " "
let staki10 = msgContent[10] || " "
let staki11 = msgContent[11] || " "
let staki12 = msgContent[12] || " "
let staki13 = msgContent[13] || " "
let staki14 = msgContent[14] || " "
let staki15 = msgContent[15] || " "
let staki16 = msgContent[16] || " "
let staki17 = msgContent[17] || " "
let staki18 = msgContent[18] || " "

let stakim1 = staki1.toUpperCase()
let stakim2 = staki2.toUpperCase()
let stakim3 = staki3.toUpperCase()
let stakim4 = staki4.toUpperCase()
let stakim5 = staki5.toUpperCase()
let stakim6 = staki6.toUpperCase()
let stakim7 = staki7.toUpperCase()
let stakim8 = staki8.toUpperCase()
let stakim9 = staki9.toUpperCase()
let stakim10 = staki10.toUpperCase()
let stakim11 = staki11.toUpperCase()
let stakim12 = staki12.toUpperCase()
let stakim13 = staki13.toUpperCase()
let stakim14 = staki14.toUpperCase()
let stakim15 = staki15.toUpperCase()
let stakim16 = staki16.toUpperCase()
let stakim17 = staki17.toUpperCase()
let stakim18 = staki18.toUpperCase()

  const background = await Canvas.loadImage(`https://cdn.discordapp.com/attachments/935813114589478942/962300267964035132/1649500592266.jpg`);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
     const log1 = db.get(`${stakim1}`)
 const log2 = db.get(`${stakim2}`)
 const log3 = db.get(`${stakim3}`)
 const log4 = db.get(`${stakim4}`)
 const log5 = db.get(`${stakim5}`)
 const log6 = db.get(`${stakim6}`)
 const log7 = db.get(`${stakim7}`)
 const log8 = db.get(`${stakim8}`)
 const log9 = db.get(`${stakim9}`)
 const log10 = db.get(`${stakim10}`)
 const log11 = db.get(`${stakim11}`)
 const log12 = db.get(`${stakim12}`)
 const log13 = db.get(`${stakim13}`)
 const log14 = db.get(`${stakim14}`)
 const log15 = db.get(`${stakim15}`)
 const log16 = db.get(`${stakim16}`)
 const log17 = db.get(`${stakim17}`)
 const log18 = db.get(`${stakim18}`) 
 
 if (log1 == null) {var logo1 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo1 = log1}
 if (log2 == null) {var logo2 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo2 = log2}
 if (log3 == null) {var logo3 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo3 = log3}
 if (log4 == null) {var logo4 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo4 = log4}
 if (log5 == null) {var logo5 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo5 = log5}
 if (log6 == null) {var logo6 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo6 = log6}
 if (log7 == null) {var logo7 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo7 = log7}
 if (log8 == null) {var logo8 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo8 = log8}
 if (log9 == null) {var logo9 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo9 = log9}
 if (log10 == null) {var logo10 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo10 = log10}
 if (log11 == null) {var logo11 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo11 = log11}
 if (log12 == null) {var logo12 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo12 = log12}
 if (log13 == null) {var logo13 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo13 = log13}
 if (log14 == null) {var logo14 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo14 = log14}
 if (log15 == null) {var logo15 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo15 = log15}
 if (log16 == null) {var logo16 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo16 = log16}
 if (log17 == null) {var logo17 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo17 = log17}
 if (log18 == null) {var logo18 = 'https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png'} else {var logo18 = log18}

      const logoo1 = await Canvas.loadImage(logo1,{format: "png"});
      try {  ctx.drawImage(logoo1, 456, 359, 50, 50) } catch(e) { console.log(logoo1)}
      const logoo2 = await Canvas.loadImage(logo2,{format: "png"});
      try {  ctx.drawImage(logoo2, 456, 424, 50, 50) } catch(e) {console.log(logoo2)}
      const logoo3 = await Canvas.loadImage(logo3,{format: "png"});
      try {  ctx.drawImage(logoo3, 456, 494, 50, 50) } catch(e) {console.log(logoo3)}
       const logoo4 = await Canvas.loadImage(`${logo4}`,{format: "png"});
      try {  ctx.drawImage(logoo4, 456, 560, 50, 50) } catch(e) {console.log(logoo4)}
      const logoo5 = await Canvas.loadImage(`${logo5}`,{format: "png"});
      try {  ctx.drawImage(logoo5, 456, 630, 50, 50) } catch(e) {console.log(logoo5)}
      const logoo6 = await Canvas.loadImage(`${logo6}`,{format: "png"});
      try {  ctx.drawImage(logoo6, 456, 696, 50, 50) } catch(e) {console.log(logoo6)}
      const logoo7 = await Canvas.loadImage(`${logo7}`,{format: "png"});
      try {  ctx.drawImage(logoo7, 456, 764, 50, 50) } catch(e) {console.log(logoo7)}
      const logoo8 = await Canvas.loadImage(`${logo8}`,{format: "png"});
      try {  ctx.drawImage(logoo8, 456, 829, 50, 50) } catch(e) {console.log(logoo8)}
      const logoo9 = await Canvas.loadImage(`${logo9}`,{format: "png"});
      try {  ctx.drawImage(logoo9, 456, 895, 50, 50) } catch(e) {console.log(logoo9)}
      const logoo10 = await Canvas.loadImage(`${logo10}`,{format: "png"});
      try {  ctx.drawImage(logoo10, 1081, 359, 50, 50) } catch(e) {console.log(logoo10)}
      const logoo11 = await Canvas.loadImage(`${logo11}`,{format: "png"});
      try {  ctx.drawImage(logoo11, 1081, 424, 50, 50) } catch(e) {console.log(logoo11)}
      const logoo12 = await Canvas.loadImage(`${logo12}`,{format: "png"});
      try {  ctx.drawImage(logoo12, 1081, 494, 50, 50) } catch(e) {console.log(logoo12)}
      const logoo13 = await Canvas.loadImage(`${logo13}`,{format: "png"});
      try {  ctx.drawImage(logoo13, 1081, 560, 50, 50) } catch(e) {console.log(logoo13)}
      const logoo14 = await Canvas.loadImage(`${logo14}`,{format: "png"});
      try {  ctx.drawImage(logoo14, 1081, 630, 50, 50) } catch(e) {console.log(logoo14)}
      const logoo15 = await Canvas.loadImage(`${logo15}`,{format: "png"}); 
      try {  ctx.drawImage(logoo15, 1081, 696, 50, 50) } catch(e) {console.log(logoo15)}
      const logoo16 = await Canvas.loadImage(`${logo16}`,{format: "png"});
      try {  ctx.drawImage(logoo16, 1081, 764, 50, 50) } catch(e) {console.log(logoo16)}
      const logoo17 = await Canvas.loadImage(`${logo17}`,{format: "png"});
      try {  ctx.drawImage(logoo17, 1081, 829, 50, 50) } catch(e) {console.log(logoo17)}
      const logoo18 = await Canvas.loadImage(`${logo18}`,{format: "png"});
      try {  ctx.drawImage(logoo18, 1081, 895, 50, 50) } catch(e) {console.log(logoo18)}
       
                            
                            
 
    
  ctx.fillStyle = "#fff";
  ctx.font = "30px American-Captain";
   // TAKIMLAR //
  ctx.fillText(`${stakim1}`, 530, 399);
  ctx.fillText(`${stakim2}`, 530, 464);
  ctx.fillText(`${stakim3}`, 530, 534);
  ctx.fillText(`${stakim4}`, 530, 600);
  ctx.fillText(`${stakim5}`, 530, 670);
  ctx.fillText(`${stakim6}`, 530, 736);
  ctx.fillText(`${stakim7}`, 530, 804);
  ctx.fillText(`${stakim8}`, 530, 869);
  ctx.fillText(`${stakim9}`, 530, 935);
  
  ctx.fillText(`${stakim10}`, 1155, 399);
  ctx.fillText(`${stakim11}`, 1155, 464);
  ctx.fillText(`${stakim12}`, 1155, 534);
  ctx.fillText(`${stakim13}`, 1155, 600);
  ctx.fillText(`${stakim14}`, 1155, 670);
  ctx.fillText(`${stakim15}`, 1155, 736);
  ctx.fillText(`${stakim16}`, 1155, 804);
  ctx.fillText(`${stakim17}`, 1155, 869);
  ctx.fillText(`${stakim18}`, 1155, 935);
  // TAKIM SON //
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "");
  message.channel.send(attachment);
 
 
  
};

exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ["canvas"]
};

exports.help = {
  name: "canvas"
};



