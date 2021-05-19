const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(client.user.tag + " is online!");
});

client.login(process.env.TOKEN);