const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["Guilds", "GuildMembers", "GuildMessages", "GuildEmojisAndStickers"] }
)

client.login("no token? :((")

client.on("ready", () => {
    console.log("SBOTTELLO ONLINE :)")
})

client.on("messageCreate", () => {
    console.log("a message got sent")
})

client.on("messageDelete", () => {
    console.log("a message got deleted")
})

client.on("emojiCreate",  () => {
    console.log("an emoji got created")
})

client.on("emojiDelete", () => {
    console.log("an emoji got deleted")
})

client.on("channelCreate", () => {
    console.log("a channel got created")
})

client.on("channelDelete", () => {
    console.log("a channel got deleted")
})

client.on("roleCreate", () => {
    console.log("a role got created")
})

client.on("roleDelete", () => {
    console.log("a role got deleted")
})

client.on("roleUpdate", () => {
    console.log("a role got updated")
})

client.off("warn", () => {
    console.log("SBOTTELLO IS GOING OFFLINE :(")           ///// da sistemare/have to repair /////
})


