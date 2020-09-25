import { client } from 'discord.js';
const cl = new client();

cl.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');

});
