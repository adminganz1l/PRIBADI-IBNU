let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['62818072548331', 'IBNU-MD',true], 
['6288272480997', 'IBNU OFFICIAL 🅥⁩',true] 
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  saipul: 'https://saipulanuar.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.linkyt = 'https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG'
global.WM = 'IBNU-MD 𝑫𝒆𝒗𝒊𝒄𝒆 𝑩𝒚 IBNU OFFICIAL 🅥⁩'
global.linkgc = 'https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG'
global.linkig = 'https://www.instagram.com/ibnu_ramadhani.1'
global.deslink = ''
global.logo = 'https://telegra.ph/file/1665521d176fbf172d735.jpg'
global.titlink = 'https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG'
global.bearkey = 'https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG'
global.bodlink = 'https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*maaf masih erorr*_'

//========Url Template Buttons==========//
global.dtu = '🌏 GROUP OFFICIAL'
global.urlnya = global.linkgc

//============= callButtons ============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '6288272480997'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/8a9b701299d73e8f469af.jpg', 'https://telegra.ph/file/e34575d14816877f97d96.jpg',
  'https://telegra.ph/file/79bef580a4c20f39a61e5.jpg', 'https://telegra.ph/file/8a9b701299d73e8f469af.jpg',
  'https://telegra.ph/file/e34575d14816877f97d96.jpg', 'https://telegra.ph/file/79bef580a4c20f39a61e5.jpg',
  'https://telegra.ph/file/8a9b701299d73e8f469af.jpg', 'https://telegra.ph/file/e34575d14816877f97d96.jpg',
  'https://telegra.ph/file/79bef580a4c20f39a61e5.jpg', 'https://telegra.ph/file/8a9b701299d73e8f469af.jpg'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
