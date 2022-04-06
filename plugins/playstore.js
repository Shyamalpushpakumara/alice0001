let hxz = require('hxz-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Enter Link\n\nExample: .playstore MineCraft'
  let res = await hxz.playstore(text)
conn.sendBut(m.chat, `*PLAY STORE*
NAME: ${res[0].name}
DEVELOPER: ${res[0].developer}
LINK: ${res[0].link}`, wm, m)
}
handler.help = ['playstore' <apk>]
handler.tags = ['internet']
handler.command = /^playstore$/i
module.exports = handler
