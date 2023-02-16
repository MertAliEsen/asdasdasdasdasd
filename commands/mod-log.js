const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  let prefix = ayarlar.prefix;
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')


  let logk = message.mentions.channels.first();
  let logkanal = await db.fetch(`log_${message.guild.id}`);

  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if (!logkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
.setColor('#df0000')
          .setDescription(`Mod-Log Kanalı Zaten Ayarlı Değil.`)
      );
    db.delete(`log_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
.setColor('#df0000')
        .setDescription(
          `✅ | Mod-log kanalı başarıyla sıfırlandı.`
        )
    );
    return;
  }

  if (!logk)
    return message.channel.send(
      new Discord.MessageEmbed()
.setColor('#df0000')
        .setDescription(
          ` Yanlış Kullanım \n Doğru Kullanım: ${prefix}mod-log #kanal`
        )
    );

  db.set(`log_${message.guild.id}`, logk.id);

  message.channel.send(
    new Discord.MessageEmbed()
.setColor('#df0000')
      .setDescription(` Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`)
  );
message.react('\<a:9582dsicordveriyblack:927161756026040340>');
};