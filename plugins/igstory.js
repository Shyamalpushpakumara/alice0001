const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `Use:\n${usedPrefix + command} <url>\n\nExample:\n\n${usedPrefix + command} shelby_cer`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '© Alice 🥀', m)

  })

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i

handler.limit = 1

module.exports = handler
