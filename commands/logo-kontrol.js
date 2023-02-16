const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
                    if(!message.member.roles.cache.has(`938097131145818192`)) return message.channel.send('Yetkin yok')

   
  let aaa = args.slice(0).join(' ');
if (aaa.length < 1) return message.reply('> **Bir Takım Yazın**');
  let aaaa = aaa.toUpperCase();
   var logo = db.get(aaaa)

   
const embed1 = new Discord.MessageEmbed()
.setColor('#ff9000')
.setDescription(`**${aaaa}** İsimli Takımın Logosu`)
.setImage(logo)

if (logo = null){
  message.channel.send("Bu Takımın Logosu Bulunmamakta")
} else {
message.channel.send(embed1)
}
};

