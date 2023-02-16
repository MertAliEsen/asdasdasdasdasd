

const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
                       if(!message.member.id == `767449979434172417`) return message.channel.send('Yetkin yok')

let a = db.all()
  .map(entry => entry.ID)

a.forEach(db.delete)


message.channel.send("Başarıyla Sıfırlandı")
};

