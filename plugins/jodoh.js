const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Example:\n${usedPrefix + command} Alice|Nakiri`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `Example:\n${usedPrefix + command} Alice|Nakiri`

    let res = await fetch(global.API('zeks', '/api/primbonjodoh', { nama1, nama2 }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let { thumb, positif, negatif } = json.result
    let caption = `
*Your name:* ${json.result.nama1}
*doi's name:* ${json.result.nama2}

*Positive:*
${positif}

*Negative:*
${negatif}
`.trim()
    conn.sendFile(m.chat, thumb, 'file.png', caption, m, 0, { thumbnail: await (await fetch(thumb)).buffer() })
}
handler.help = ['jodoh'].map(v => v + ' <nae>|<doi name>')
handler.tags = ['fun']
handler.command = /^(jodoh)$/i

module.exports = handler
