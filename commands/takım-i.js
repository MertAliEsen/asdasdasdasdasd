const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
       //   if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')

  let mesaj = args.slice(0).join(' ');
  let mesajbüyük = mesaj.toUpperCase()
if (mesaj.length < 1) return message.reply('> **bir şey yazın**');

   let birincilik = db.get(`birincilik_${mesajbüyük}`) || 0
   let ilküç = db.get(`ilküçegirme_${mesajbüyük}`) || 0
   let totalkill = db.get(`tümtotalkill_${mesajbüyük}`) || 0
   let scrimkatılma = db.get(`scrimkatılma_${mesajbüyük}`) || 0
   let logo = db.get(mesajbüyük) 

const embed1 = new Discord.MessageEmbed()
.setColor('#8a929a')
.setTitle(`${mesaj}, adlı takımın istatistikleri`)
.addField(`Birinci Olma:`,`${birincilik}`, true)
.addField(`İlk Üçe Girme:`,`${ilküç}`, true)
.addField(`Katılılan Scrim:`,`${scrimkatılma}`, true)
.addField(`Total Kill:`,`${totalkill}`, true)
.setThumbnail(logo)
message.channel.send(embed1)
};

