const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ip'){
        message.channel.send(`Hey ${message.author}, The IP is **pixularcraft.tk**`);
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('PixularCraft help')
            .setURL('https://pixularcraft.tk/')
            .setAuthor('Requested by ${message.author}')
            .setDescription('Some helpful commands')
            .setThumbnail('https://imgur.com/NNHSpWI')
            .addField('!ip', 'Get the server ip')
            .addField('!report', 'Report someone', true)
            .addField('!new', 'Create ticket for support', true)
            .setTimestamp()
            .setFooter('PixularCraft bot by lolplomer#8123 :)', 'https://imgur.com/NNHSpWI');

        channel.send(helpEmbed);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
