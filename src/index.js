const { Client } = require('discord.js')
const fetch = require('node-fetch')
const client = new Client()
const token = process.env.TOKEN
require('dotenv').config()

const getQuote = () => {
  return fetch('https://zenquotes.io/api/random')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return `${data[0].q} - ${data[0].q}`
    })
}

const sadWords = ['sad', 'depressed', 'unhappy', 'angry', 'miserable']
const encouragements = [
  'Cheer up',
  'Hang in there!',
  'You are a great person / bot!',
]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', (msg) => {
  if (msg.author.bot) return

  if (msg.content === 'inspire') {
    getQuote().then((quote) => msg.channel.send(quote))
  }
  if (sadWords.some((word) => msg.content.toLowerCase().includes(word))) {
    const encouragement =
      encouragements[Math.floor(Math.random() * encouragements.length)]
    msg.reply(encouragement)
  }
})

//Login to discord with your clients token
console.log(token)
client.login(token)
