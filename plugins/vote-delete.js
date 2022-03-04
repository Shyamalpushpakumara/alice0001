let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `No voting in this group!`, '© Alice 🥀', 'Start', `${usedPrefix}+vote`, m)
    delete conn.vote[id]
    m.reply(`Succeed!`)
}
handler.help = ['unvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i

module.exports = handler
