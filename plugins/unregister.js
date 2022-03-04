const { createHash } = require('crypto')

let handler = async function (m, { args }) {
  if (!args[0]) throw 'Wheres the serial number?'
  let user = db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Wrong serial number'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|Serial Number>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i

handler.register = true

module.exports = handler
