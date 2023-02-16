const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
       //   if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')
           //   if(!message.member.roles.cache.has("910284840396533830")) return message.channel.send('Yetkin yok')
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

  
  let name = args.slice(0).join(' ');
if (name.length < 1) return message.reply(' **Bir Durum Yazın**');


db.set("durum",name)
message.react('\<a:2599discordverifypink:927161758764912680>');
  message.channel.send("**Durum 1-2 saniyeye değişir lütfen bekleyin**")

  const test = db.get("durum")
  console.log(test)
};

