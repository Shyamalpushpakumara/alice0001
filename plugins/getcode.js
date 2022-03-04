let handler = async m => m.reply(`
☕ Alice is a not open source project..💞💞 
`.trim())

handler.help = ['getcode']
handler.tags = ['jadibot']
handler.command = /^(getcode)$/i

module.exports = handler
