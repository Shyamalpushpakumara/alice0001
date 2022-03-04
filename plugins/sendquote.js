async function handler(m) {
    if (!m.quoted) throw `Reply to the message with a command *${usedPrefix + command}*`
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'The message you replied contains no replies!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i

module.exports = handler
