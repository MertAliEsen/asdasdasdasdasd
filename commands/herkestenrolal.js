const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
const rol =  message.mentions.roles.first()

  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle!')

   message.guild.members.cache.forEach(u => { 
u.roles.remove(rol)
   })
   const embed = new Discord.MessageEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)
   
   
  
  message.channel.send(embed)
}