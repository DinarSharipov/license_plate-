const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()

const token = process.env.BOT_TOKEN

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg=> console.log(msg))