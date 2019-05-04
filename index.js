const express = require("express");
const Telegraf = require('telegraf');
const config = require("./config.json");
const Markup = require('telegraf/markup');
const bot = new Telegraf(config.token);
const app = express();

const bio = `Hello, my name is Safarmurod, 17 y.o kiddo from Uzbekistan.
I have been coding since 2018. HTML & CSS, JavaScript with ES6+, Node.js with Express.js. Currently learning and actively practicing with React.js Node.js and Express.js.

This is my bot which sends Random or Weekly Photos from Unsplash`;

bot.command('info', (ctx) => ctx.reply(bio));

bot.command('start', ({ reply }) => {
	return reply(`Welcome to Safar's Telegram Bot, Please Choose one button below 😁`, Markup
			.keyboard([
					['📷 Random Unsplash', '😎 Weekly Unsplash'],
					['🔖 info']
			])
			.oneTime()
			.resize()
			.extra()
	);
});

bot.hears('📷 Random Unsplash', ctx => ctx.replyWithPhoto({
	url: 'https://source.unsplash.com/random',
}));

bot.hears('😎 Weekly Unsplash', ctx => ctx.replyWithPhoto({
	url: 'https://source.unsplash.com/random/weekly'
}));

bot.hears('🔖 info', ctx => ctx.reply(bio));

bot.use(Telegraf.log());
bot.launch();