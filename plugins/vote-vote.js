let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `No voting in this group!`, '© Alice 🥀', '▫️ sʀᴀʀᴛ ▫️', `${usedPrefix}+vote`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'You have voted!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *🔸 Vote 🔸* 」
*🔹 Reason:* ${reason}
*🔺 Upvote 🔺*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*🔻 Devote 🔻*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
© Alice 🥀
    `.trim()
    conn.send2Button(m.chat, caption, '© Alice 🥀', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, m)
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

module.exports = handler
