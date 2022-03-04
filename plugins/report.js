let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `If you get an error message, report it using this command\n\nExample:\n${usedPrefix + command} Hello, found the following errors <copy/tag the error message>`
    if (text.length < 10) throw `Report is too short, at least 10 characters!`
    if (text.length > 1000) throw `Report is too long, maximum 1000 characters!`
    let teks = `*${command.toUpperCase()}!*\n\nFrom : *@${m.sender.split`@`[0]}*\n\nMessage : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Messages sent to bot owners, if $ {command.toLowerCase ()} is just joking will not be responded to._`)
}
handler.help = ['report', 'request'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler
