const Discord = require('discord.js')

module.exports = { 
    run: async (message, args) =>{
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')

        const member = message.mentions.members.first();
        const role = message.mentions.roles.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à mute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas enlevé de role au owner .')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')
        if (!member.manageable) return message.channel.send('Le bot ne peut pas enlevé ce role a cette personne.')


        await member.roles.remove(role)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle( member.displayName  + ` C'est fait enlevé sont role avec succès`)
        )
    },
    name:"unadd",
    guildOnly: true,
    help: {
        description: 'remove un role a un membre.',
        syntax: '+ {membre} + {role a remove}'
    }

}