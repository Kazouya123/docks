const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('__Horaire :__')
            .setColor('PURPLE')
            .addField('','', true)
            .setImage('https://cdn.discordapp.com/attachments/890652936898744443/890997317421912095/telechargement.png')
            .setTimestamp())
            message.delete();

    },
    name: 'reseaux',
    guildOnly: true,
    help: {
        description: 'permet d\'afficher les réseaux sociau des docks',
        syntax: '!reseaux'
    }
}

