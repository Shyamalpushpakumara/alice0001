let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hi, ${this.ucapan()}
${user.banned ? 'you are banned' : `My Name Is Alice How Can i help You?`}
`.trim(), '© Alice 🥀', user.banned ? '😗' : 'Menu', user.banned ? '😗' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
