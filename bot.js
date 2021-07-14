const tmi = require('tmi.js');
require('dotenv').config();
const fs = require('fs');

// Define configuration options
const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN,
    },
    channels: [
        'itsTominal'
    ]
}

function onMessageHandler (target, context, msg, self) {
    if(self) return

    const commandName = msg.trim()

    if(commandName === '!dice') {
        client.say(target, `I don't care about a dice command.`)
    } else if(commandName === '!github') {
        client.say(target, `My GitHub is: https://github.com/tominal`)
    } else if (commandName === '!twitter') {
        client.say(target, `My Twitter is: https://twitter.com/itstominal`)
    } else {
        console.log(`Not a valid command: ${commandName}`)
    }
}

function onConnected (addr, port) {
    console.log("Twitch bot came online.")
}

const client = new tmi.client(opts)

client.on('message', onMessageHandler);
client.on('connected', onConnected);

client.connect();
