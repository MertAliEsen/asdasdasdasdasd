const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
if(!args[0]) return message.channel.send(`**Lütfen Silinicek Mesaj Miktarını Yazın.!**`);
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(
(new Discord.MessageEmbed()
.setColor('#df0000')
.setTitle("Temizle Komutu") // başlık kısmımız
.setDescription(`${message.channel} üzerinde **${args[0]}** mesaj sildim.`) // açıklama
.addField("Mesajları silen yetkili" , `${message.member}`) // Silen yetkiliyi gösterdiği kısım
.setFooter(`Rog Media Organization`, client.user.avatarURL())
.setThumbnail(`https://cdn.discordapp.com/attachments/935813114589478942/955173557833441350/1647781398378.png`)

.setTimestamp() // en sağ altta saati söyler eğer istemiyorsanız bu kod satırını silebilirsin.
));
})
}