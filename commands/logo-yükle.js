const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
       //   if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')
           //   if(!message.member.roles.cache.has("910284840396533830")) return message.channel.send('Yetkin yok')
                      
  if(message.channel.id !== `960951732060442644`) return message.channel.send('Bu komutu bu kanalda kullanamazsın')
              if(!message.member.roles.cache.has(`938097131145818192`)) return message.channel.send('Yetkin yok')

  
  let name = args.slice(0).join(' ');
if (name.length < 1) return message.reply('> **Bir Takım Yazın**');
  let name2 = name.toUpperCase();

const logo =  message.attachments.first().url

db.set(name2,logo)
message.react('\<a:9582dsicordveriyblack:927161756026040340>');

  const test = db.get(name2)
  console.log(test)
};

