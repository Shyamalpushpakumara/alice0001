let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '© Alice 🤍🥀', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko$/i

module.exports = handler
