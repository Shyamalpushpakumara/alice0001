let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
  if (text) {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome successfully set \ n@user (Mention) \ n@subject (Group Title) \ n@desc (Group Description)')
  } else throw `Usage: \ n $ {usedPrefix + command} <text> \ n \ nExample: \ n $ {usedPrefix + command} welcome @user grouped @subject \ n \ n @desc`
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']
handler.command = /^setwelcome$/i

module.exports = handler
