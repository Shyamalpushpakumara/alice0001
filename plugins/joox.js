const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} contract`
    if (isUrl(text)) throw `uhm.. your title doesn't use a url\n\nExample:\n${usedPrefix + command} contract`

    let res = await fetch(API('pencarikode', '/download/joox', { search: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, img_url, mp3_url, filesize, duration } = json.result
    let pesan = `
🔮 Title: ${judul}
🎐 Artist: ${artist}
🎐 Album: ${album}
🎐 Filesize: ${filesize}
🎐 Duration: ${duration}

© Alice 🥀
    `.trim()

    conn.sendFile(m.chat, img_url, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, mp3_url, 'error.mp3', '', m, 0, { asDocument: db.data.chats[m.chat].useDocument, mimetype: 'audio/mp4' })
}
handler.help = ['joox'].map(v => v + ' <title>')
handler.tags = ['downloader']
handler.command = /^joox$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
