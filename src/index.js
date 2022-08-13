const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const {
  giveEncouragement,
  updateEncouragements,
  deleteEncouragements,
} = require('./encouragement')
const getQuote = require('./inspire')
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', (msg) => {
  if (msg.author.bot) return
  const msgContent = msg.content.trim().toLowerCase()

  // if (msgContent === '$inspire') {
  //   getQuote().then((quote) => msg.channel.send(quote))
  // }

  giveEncouragement(msg, msgContent)
})

//Login to discord with your clients token
client.login(process.env.TOKEN)
