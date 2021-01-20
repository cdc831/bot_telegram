//const Telegraf = require('telegraf')
const { Telegraf } = require('telegraf')

const bot = new Telegraf('1525963003:AAF-5j5jUQwx7JWwGfMfsrkgVqYJXPQ_xr8')

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
    ctx.reply('http://ardc4svdwa003.latam1.prosegur.local/m4richwebnet.html');
})

bot.command('RichWebLatamProd',(ctx) => {
    ctx.reply('http://meta4.latam1.prosegur.local/m4richwebnet.html');
})

bot.command('RichWebGlobalDh',(ctx) => {
    ctx.reply('http://meta4predh.prosegur.local/m4updateservices/m4richwebnet.html');
})

bot.command('RichWebGlobalHomo',(ctx) => {
    ctx.reply('http://meta4pre.prosegur.local/m4updateservices/m4richwebnet.html');
})

bot.command('RichWebGlobalProd',(ctx) => {
    ctx.reply('https://meta4.prosegur.local/m4richwebnet.html');
})

bot.command('PortalGlobalDh',(ctx) => {
    ctx.reply('http://portalpredh.prosegur.local/sse_generico/generico_login_nuevo.jsp');
})

bot.command('PortalGlobalHomo',(ctx) => {
    ctx.reply('http://portalpre.prosegur.local/sse_generico/generico_login_nuevo.jsp');
})

bot.command('PortalGlobalProd',(ctx) => {
    ctx.reply('https://portal.prosegur.local/sse_generico/generico_login_nuevo.jsp');
})
// /BaseLatamHomo\n/BaseGlobalDesa\n/BaseGlobalDH\n/BaseGlobalHomo
bot.command('BaseLatamHomo',(ctx) => {
    ctx.reply('Usuario: USER_HRPRODAR\nContraseña: migracion ');
})

bot.command('BaseGlobalDesa',(ctx) => {
    ctx.reply('Usuario: M4GLOBAL\nContraseña: Mooi2015 ');
})

bot.command('BaseGlobalDH',(ctx) => {
    ctx.reply('Usuario: AR00111255[M4GLOBAL]\nContraseña: GCJyWdB#vv ');
})

bot.command('BaseGlobalHomo',(ctx) => {
    ctx.reply('Usuario: AR00111281[M4GLOBAL]\nContraseña: IZQavhpFFMRK ');
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