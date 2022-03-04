let finder = require('lyrics-finder')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nExample:\n${usedPrefix + command} Gangsta's Paradise`
  let res = await finder("", text)
  if (!res) throw eror

  m.reply(res)
}
handler.help = ['lyrics'].map(v => v + ' <text>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics?)$/i

module.exports = handler
