let handler = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu set successfully\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu reset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + 'successfully set\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' <text>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i

handler.owner = true

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp required for levelup)
%limit (Limit)
%level (level)
%role (Role)
%name (Name)
%weton (Weton Today)
%week (week)
%date (Date)
%time (time)
%uptime (Bot Uptime)
%rtotalreg (Number of Users registered in the database)
%totalreg (Number of Users in the database)
%npmname
%npmdesc
%version
%github

Header & Footer Menu Section:
%category (category)

Body Menu Section:
%cmd (Command)
%islimit (Body Menu Section)
%isPremium (If the premium command)
`.trim()
