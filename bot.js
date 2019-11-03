const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/ip'){
        message.channel.send(`Hey ${message.author}, The IP is **pixularcraft.tk**`);
  	}
});

client.on('message', message => {
    if (message.content === '/test') {
        const exampleEmbed = new Discord.RichEmbed().setTitle('Some title');
        channel.send(exampleEmbed);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
