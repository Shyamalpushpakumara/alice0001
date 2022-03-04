let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. where is the url?\n\nUse:\n${usedPrefix + command} url\nExample :\n${usedPrefix + command} http://gg.gg/AliceBot`
    let res = await fetch(API('xteam', '/dl/mediafire', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.result.url, json.result.title, wm, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(mediafire|mf)$/i

handler.limit = 1

module.exports = handler
