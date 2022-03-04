let fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Lamongan`
    let res = await fetch(API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (!res.ok) throw `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. province: ${v.province}\nCity: ${v.city}\nKecamatan: ${v.subdistrict}\nUrban: ${v.urban}\nPostal code: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['zipcode <city>']
handler.tags = ['tools']
handler.command = /^zipcode$/i

handler.limit = 0

module.exports = handler
