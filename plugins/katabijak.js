const { quotes } = require('../lib/scrape')
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `Use:
${usedPrefix + command} <text>

Example:
${usedPrefix + command} love

┌「 *Choice* 」
├ love
├ miss
├ dream
├ alone
├ patient
├ sadness
├ wedding
├ independence
└────`.trim()
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(async res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                await conn.send2Button(m.chat, `“${quote}”`, `${author} - ${bio}`, `KATA BIJAK ${args[0].toUpperCase()}`, `${usedPrefix + command} ${args[0]}`, `Acak`, `${usedPrefix + command} ${conn.pickRandom(['rindu', 'mimpi', 'sendiri', 'sabar', 'kesedihan', 'pernikahan', 'kemerdekaan'])}`, m)
            })
            break
        default:
            throw er
    }
}
handler.help = ['wordsofwisdom'].map(v => v + ' <option>')
handler.tags = ['internet']
handler.command = /^(katabijak|wordsofwisdom)$/i

module.exports = handler 
