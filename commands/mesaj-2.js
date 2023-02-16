const Discord = require('discord.js');

exports.run = async (client, message, args) => {
        //  if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

  
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('> **bir şey yazın**');

   

const embed1 = new Discord.MessageEmbed()
.setColor('#df0000')
.setDescription(`${mesaj}`)
.setThumbnail(`https://cdn.discordapp.com/attachments/935813114589478942/955173557833441350/1647781398378.png`)
message.channel.send(embed1)
  message.delete();

};

