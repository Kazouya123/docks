const config = require('../config.json')
const Discord = require('discord.js')
 
module.exports = {
    run: (message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        
        .setColor('RANDOM')
        .addField(message.content.trim().slice(`${config.prefix}say-emb`.length) ,'__________________________' ,true)
        .setTimestamp())
    },
    name: 'say-emb',
    guildOnly: true
}