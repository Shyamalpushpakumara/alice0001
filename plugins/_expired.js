let handler = m => m

handler.before = async function (m) {
    let chat = db.data.chats[m.chat]
    if (m.isGroup && chat.groupTime != 0) {
        if (new Date() * 1 >= chat.groupTime) {
            await this.reply(m.chat, `Time *${this.user.name}* to leave the group, thank you.. 🤍🥀`)
            chat.welcome = false
            this.groupLeave(m.chat)
            chat.groupTime = 0
            this.modifyChat(m.chat, 'delete').catch(_ => _)
        }
    }
}

module.exports = handler
