const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("MTAxMzc4MjUwMzgyMTE2MDU1OQ.GhRvS4.BKhcikHqS4Rkr-hypSrlmBaL1SQqhRuNAzaUQQ")

client.on("ready", () => {
    console.log("Ce Sto")
})
