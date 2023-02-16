const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

const embed = new Discord.MessageEmbed()
.setTitle("__Rog Media Organization__ Moderasyon Komutları")
.addField("**\<:rogmedya:938098683990384641> r!karşılama `aç/kapat` `#kanal` `@rol`**","Sunucuya Katılan Kullanıcıları Karşılar.")
.addField("**\<:rogmedya:938098683990384641> r!mod-log `#kanal`**","Sunucuya Katılan Kullanıcıları Karşılar.")
.addField("**\<:rogmedya:938098683990384641> r!temizle `miktar`**","Belirtilen Kadar Mesaj Siler.")
.addField("**\<:rogmedya:938098683990384641> r!ban `@kullanıcı`**","Etiketlenen Kişiyi Banlar")
.addField("**\<:rogmedya:938098683990384641> r!herkestenrolal `@rol`**","Belirtilen Rolü Herkesten Alır")
.setFooter(`Rog Media Organization`)
.setThumbnail(`https://cdn.discordapp.com/attachments/935813114589478942/955173557833441350/1647781398378.png`)
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
