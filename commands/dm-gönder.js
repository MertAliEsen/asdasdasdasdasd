const Discord = require('discord.js');
exports.run = (client, message, args) => {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Göndereceğim mesajı yaz');
//  if (message.mentions.users.cache.size < 1) return message.reply('Kime Mesaj Göndereceğim yaz veya etiketle.').catch(console.error);
message.delete()
 message.reply('Mesajını Gönderdim.')
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Yetkililerden Bir Mesaj Var!**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
  
};