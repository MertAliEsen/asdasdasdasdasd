const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (client, message, args) => {
              //if(message.author.id !== ayarlar.kullanıcılar) {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
const embed = new Discord.MessageEmbed()
.setTitle("__Rog Media Organization__ Bot Komutları")
.addField("**\<:rogmedya:938098683990384641> r!duyuru**","Duyuru Komutları Yardım Menüsü")
.addField("**\<:rogmedya:938098683990384641> r!moderasyon**","Moderasyon Komutları Yardım Menüsü")
//.addField("**\<a:SabitGif:904448858703134790> .tablo**","Çıkartabileceğiniz Tabloları Listeler")
.addField("**\<:rogmedya:938098683990384641> r!ekstra**","Ekstra Sistemler İçin Yardım Menüsü")
.addField("**\<:rogmedya:938098683990384641> r!tablo**","Çıkartılabilecek Tablolar İçin Yardım Menüsü")
//.addField("**\<a:krmzyldz:904449352439853096> .check**","Check Açıp-Kapatma İçin Yardım Menüsü")
.setThumbnail(`https://cdn.discordapp.com/attachments/935813114589478942/955173557833441350/1647781398378.png`)
.setFooter(`Rog Media Organization`)
.setColor('#df0000')
message.channel.send(embed);
//} else { message.channel.send("Yetkin Yok")};
};

exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"]
};

exports.help = {
  name: "yardım"
};
