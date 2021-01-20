//const Telegraf = require('telegraf')
const { Telegraf } = require('telegraf')

const bot = new Telegraf('xxxxxxx')

bot.start((ctx) => {
    ctx.reply(`Bienvenido ${ctx.from.first_name}, en que puedo ayudarte?, si no sabes por donde empezar te recomiento que uses el comando /help`);
})

var comandos = "Para interactuar con el bot a continuacion te envio los siguientes comandos disponibles hasta el momento:\n\n/RichWebLatamHomo\n/RichWebLatamProd\n/RichWebGlobalDh\n/RichWebGlobalHomo\n/RichWebGlobalProd\n/PortalGlobalDh\n/PortalGlobalHomo\n/PortalGlobalProd\n/BaseLatamHomo\n/BaseGlobalDesa\n/BaseGlobalDH\n/BaseGlobalHomo\n\nhace clic en cualquier comando para obtener la respuesta.\nSaludos.";

bot.help((ctx) => {
    ctx.reply(comandos);
})

// Comandos personalizados
bot.command('RichWebLatamHomo',(ctx) => {
    //comandos.forEach(function(Element){
    //    ctx.reply(Element);
    //});
    ctx.reply('xxxxxx');
})

bot.command('RichWebLatamProd',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('RichWebGlobalDh',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('RichWebGlobalHomo',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('RichWebGlobalProd',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('PortalGlobalDh',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('PortalGlobalHomo',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('PortalGlobalProd',(ctx) => {
    ctx.reply('xxxxxx');
})
// /BaseLatamHomo\n/BaseGlobalDesa\n/BaseGlobalDH\n/BaseGlobalHomo
bot.command('BaseLatamHomo',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('BaseGlobalDesa',(ctx) => {
    ctx.reply('xxxxxx');
})

bot.command('BaseGlobalDH',(ctx) => {
    ctx.reply('xxxxxx ');
})

bot.command('BaseGlobalHomo',(ctx) => {
    ctx.reply('xxxxxx ');
})

// Escuchar otros textos
bot.hears(['Gay','gay','puto','Puto','Mierda','mierda','Caca','caca','gil','gil','Gordo','gordo','Cornudo','cornudo','Gorrean','gorrean','Tarado','tarado'],(ctx => {
    ctx.reply('Soy un bot, no es necesario que me insultes, por eso te gorrean. Sabelo!')
}))

bot.on('text',(ctx => {
    ctx.reply('No entiendo que queres decir, recorda que con el comando /help tenes las lista de comandos disponibles')
}))

bot.on('sticker',(ctx => {
    ctx.reply('Gracias por el sticker, pero recorda que soy un bot no humano.')
}))
bot.launch()
