let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://telegra.ph/file/d0bf18c5b151746f5765e.mp4', '', '✨ Hello Honey ✨💞\n\n▫️ Type *.botstatus* to get Botstatus 💞 \n\n▫️ Type *.menu* to get full menu 💞\n\n© Alice 🥀', m)
  
}
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^(alive)$/i

module.exports = handler
