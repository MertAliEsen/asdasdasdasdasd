const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetki
              if(!message.member.roles.cache.has("938097131145818192")) return message.channel.send('Yetkin yok')

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let cmfzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('BLACK')
            return message.channel.send(CodeMareFi)
        } else if(isNaN(kullanıcı)){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('BLACK')
            return message.channel.send(CodeMareFi)
        }
        if(!sebep){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('BLACK')
            return message.channel.send(CodeMareFi)
        }

        if(kullanıcı && sebep){
            // Ban İşlemi
            kullanıcı.ban({reason: sebep})

            // Mesaj
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`
                \` ˑ \`Banlanan Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \` ˑ \`Banlayan Yetkili - **${message.author}(\`${message.author.id}\`)**
                \` ˑ \`Ban Nedeni - **${sebep}**
            `)
            .setColor('BLACK')
            message.channel.send(CodeMareFi)
        }
    }