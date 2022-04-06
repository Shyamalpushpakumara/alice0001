let fs = require('fs')
let chalk = require('chalk')

global.owner = ['94787871561', '94711392491'] // Letakan nomor kamu disini

global.APIs = { // API Prefix
  // nama: 'https://website'
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://api.reysekha.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  waifupics: 'https://api.waifu.pics',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://melcanz.com': 'obefhhqP',
  'https://api.reysekha.my.id': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.eu.org': 'UYFhJwJ9du',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.chipa.xyz': 'pais',
  'https://api.xteam.xyz': '86399e0f56a8347f',
  'https://api.zeks.me': 'rNOP3N9WFFY7tqbMeNp1lmWkdwLqqqq',
}

// Sticker WM
global.packname = '© Alice 🥀'
global.author = 'Wabot'

global.wm = '© Alice 🥀'
global.wait = 'Please wait'
global.eror = 'Server Error'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'A little more..'
global.fla = 'https://i.imgur.com/p9Je8jv.jpg'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
