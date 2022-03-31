const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. where is the url?\n\nexample:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
  if (/^https?:\/\/.*(m.facebook.com||www.facebook.com|facebook.com)/i.test(m.text)) throw `only support url from FB lite and web only _please check url again_`

  let res = await fetch(API('xteam', '/dl/fbv2', { url: args[0] }, 'APIKEY'))
  if (!res.ok) return m.reply(eror)
  let json = await res.json()
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.hd.url, '', '© Alice 🥀', m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.premium = false

module.exports = handler
