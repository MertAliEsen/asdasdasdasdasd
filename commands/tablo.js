const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
             // if(!message.member.roles.cache.has("902259551473111110")) return message.channel.send('Yetkin yok')
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

const embed = new Discord.MessageEmbed()
.setTitle("__Rog Media Organization__ Tablolar")
.addField("**<:rogmedya:938098683990384641> r!pro-result**","Pro Result Tablosu")
.addField("**<:rogmedya:938098683990384641> r!star-result**","Star Result Tablosu")
.addField("**<:rogmedya:938098683990384641> r!pro-slot**","Pro Slot Tablosu")
.addField("**<:rogmedya:938098683990384641> r!star-slot**","Star Slot Tablosu")
.setThumbnail(`https://cdn.discordapp.com/attachments/935813114589478942/955173557833441350/1647781398378.png`)
.setFooter(`Rog Media Organization`)
.setColor('#df0000')
message.channel.send(embed);
};

exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"]
};

exports.help = {
  name: "yardım"
};
