const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('Vérification pour accéder au serveur : ')
            .setColor('RANDOM')
            .addField('Voici la vérification de notre serveur minecratf', 'Click sur la réaction pour accéder au serveur',true)
            .setAuthor('🌟- Kazou#0628', 'https://cdn.discordapp.com/avatars/810476291005743154/fca7f5a7c7a8db12518685f8944dd528.png?size=2048')
            .setImage('https://cdn.discordapp.com/attachments/829844601740853328/829845996464767066/5c93aebe240000b000c84cd2.jpeg')
            .setThumbnail('https://cdn.discordapp.com/avatars/810620149458796545/6d738fdb938d7aaea05d1f968b5ef71b.png?size=2048')
            .setFooter('Mon bot perso **bonjour**', 'https://cdn.discordapp.com/avatars/810620149458796545/6d738fdb938d7aaea05d1f968b5ef71b.png?size=2048')
            .setTimestamp())
            message.delete();

    },
    name: 'v'
}