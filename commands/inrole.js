const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

exports.run = async (client, message, args) => {
    //          if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')
 let rolll = message.mentions.members.first()
      let listedChannels = []
      const csguild = message.guild

      csguild.members.cache.forEach(async p => {
    if (p.roles.cache.has(rolll)) {

          listedChannels.push(`\`${p.user.tag}`);
        }
        message.channel.send(`${listedChannels.join(`\n`) || "KİMSE YOK"}`)
      });

            


};

