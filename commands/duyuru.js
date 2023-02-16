const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
             // if(!message.member.roles.cache.has("902259551473111110")) return message.channel.send('Yetkin yok')
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

const embed = new Discord.MessageEmbed()
.setTitle("__Rog Media Organization__ Duyuru Komutları")
.addField("**\<:rogmedya:938098683990384641> r!mesaj-1 `text`**","Logosuz - Embed Atar")
.addField("**\<:rogmedya:938098683990384641> r!mesaj-2 `text`**","Logolu - Embed Atar")
.addField("**\<:rogmedya:938098683990384641> r!yaz `text`**","Normal Bir Şekilde Mesaj Atar")
.addField("**\<:rogmedya:938098683990384641> r!foto-mesaj `#kanal` `text` ||+ olarak ekte fotoğraf||**","Dilediğiniz Fotoğrafı kutucuk içine koyup ekstradan yazı yazıp gönderir")
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
