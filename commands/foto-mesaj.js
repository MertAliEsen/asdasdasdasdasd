const Discord = require('discord.js');

exports.run = async (client, message, args) => {
                     if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
//   if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')
          //    if(!message.member.roles.cache.has("927246681064497184")) return message.channel.send('Yetkin yok')
const logo =  message.attachments.first().url || "https://cdn.discordapp.com/attachments/902267969621606441/926978345789435944/minecraft-icon-removebg-preview.png"
      const kanal =  message.attachments.first().channel
  let mesaj1 = args.slice(1).join(' ');
if (mesaj1.length < 1) return message.reply('> **bir şey yazın**');

   
const embed1 = new Discord.MessageEmbed()
.setColor('#df0000')
.setImage(logo)
.setDescription(`${mesaj1}`)
message.channel.send(embed1)
 // message.channel.send(`${mesaj}`)
  message.delete();

};

