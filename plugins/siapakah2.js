let handler = async (m, { conn, participants, command, text }) => {
    let who
    if (!m.isGroup) who = m.sender
    else {
        let member = participants.map(u => u.jid)
        who = member[Math.floor(Math.random() * member.length)]
    }
    let jawab = `
*Question:* ${command} ${text}?
*Answer:* @${who.replace(/@.+/, '')}
    `.trim()
    conn.reply(m.chat, jawab, m)
}
handler.help = ['', 'is'].map(v => 'who' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^who(is)?$/i

module.exports = handler
