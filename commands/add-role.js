const Discord = require('discord.js')

module.exports = { 
    run: async (message, args) =>{
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')

        const member = message.mentions.members.first();
        const role = message.mentions.roles.first()
        if (!member) return message.channel.send('Veuillez mentionner un membre .')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas ajouter de role au owner .')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas ajouter ce role a cette personne.')



        await member.roles.add(role)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle( member.displayName + ` a recu sont role avec succès`)
        )
    },
    name:"add",
    guildOnly: true,
    help: {
        description: ' add un role as un membre .',
        syntax: '+ {membre} + {role a add}'
    }
}