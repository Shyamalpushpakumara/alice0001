let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `No voting in this group!`, '© Alice 🥀', 'Start', `${usedPrefix}+vote`, m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *Vote* 」

*Reason:* ${reason}

*Upvote*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}

*Devote*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}

© Alice 🥀
    `.trim()
    await conn.send3Button(m.chat, caption, '© Alice 🥀', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, 'wipe', `${usedPrefix}-vote`, m)
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

module.exports = handler
