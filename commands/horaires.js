const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('__Horaire :__')
            .setColor('PURPLE')
            .addField('lundi : Fermé ',' dimanche : fermé', true)
            .addField('mardi : 14h - 18h30 ',' mercredi : 14h - 18h30', true )
            .addField('jeudi : 14h - 18h30 ',' vendredi : 14h - 18h30',true )
            .addField('samedi : 14h - 18h30 ','les horaires peuvent etre changer',true )
            .setImage('https://cdn.discordapp.com/attachments/890652936898744443/890997317421912095/telechargement.png')
            .setTimestamp())
            message.delete();

    },
    name: 'horaire',
    guildOnly: true,
    help: {
        description: 'permet d\'afficher les horaise d\'ouverture des docks',
        syntax: '!horaires'
    }
}

