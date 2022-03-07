let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // Hi Alice
    try {
        if (m.mentionedJid.includes(Hey Alice) && m.isGroup) {
            await m.reply('Hello Love')
        }
    } catch (e) {
        return
    }
  // Alice
   try {
      if (m.mentionedJid.includes(Alice) && m.isGroup) {
            await m.reply('Did you call me? 😗')
        }
    } catch (e) {
        return
    }

module.exports = handler
