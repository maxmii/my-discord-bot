const { Discord, GatewayIntentBits } = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds] })
const token = process.env.TOKEN

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

//Login to discord with your clients token
console.log(token)
// client.login(token)
