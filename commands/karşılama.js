const Disord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

      if(args[0] === "aç"){
            // Ön Data
            db.set(`otorol_${message.guild.id}`, 'acik')

            // Let Tanımları
            let kanal = message.mentions.channels.first();
            let rol = message.mentions.roles.first();
    
            if(!kanal){
                const Embed = new Disord.MessageEmbed()
                .setDescription(`**Lütfen Bir Kanal Etiketle.**`)
.setColor('#8a929a')
                return message.channel.send(Embed)
            }
            if(!rol){
                const Embed = new Disord.MessageEmbed()
                .setDescription(`**Lütfen Bir Rol Etiketle.**`)
.setColor('#8a929a')
                return message.channel.send(Embed)
            }
          

            if(rol && kanal){
                // Data
                db.set(`okanal_${message.guild.id}`, kanal.id)
                db.set(`orol_${message.guild.id}`, rol.id)
    
                // Mesaj
                const Embed = new Disord.MessageEmbed()
                .setDescription(`
                Karşılama Sistemi Başarıyla Aktif Edildi\n
                    \`Kanal\` = ${kanal}
                    \`Rol\` = ${rol}
                `)
.setColor('#8a929a')
                message.channel.send(Embed)
            }
        } else if(args[0] === "kapat"){
            // Kişi Eğer Sistemi Kapatırsa Datadaki Verileri Silelim
            db.delete(`orol_${message.guild.id}`)
            db.delete(`okanal_${message.guild.id}`)         

            const Embed = new Disord.MessageEmbed()
            .setDescription(`**Karşılama Sistemi Başarıyla Kapatıldı.**`)
.setColor('#df0000')
            message.channel.send(Embed)
        }
    }
