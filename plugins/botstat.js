let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, group, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
┌─「 *STATUS* 」
├ 📊 Active Since: ${uptime}
├ 🧬 Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charging' : ''}` : 'Unknown'}
├ 🔖 Groups: *${groups.length}*
├ 🔖 Private Chats: *${chats.length - groups.length}* 
├ 🔖 Users: *${Object.keys(global.db.data.users).length}* 
├ 🔖 Jadibots: *${totaljadibot.length}* 
├ ⚠️ Blocked: *${conn.blocklist.length}* 
├ ⚠️ Banned Chats: *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* 
├ ⚠️ Banned Users: *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*
└────────────

┌─「 *ARRANGEMENT* 」
├🔅 *Anon Chat:* ${anon ? '✅' : '❌'} 
├🔅 *Anti Call:* ${anticall ? '✅' : '❌'}
├🔅 *Anti Spam:* ${antispam ? '✅' : '❌'}
├🔅 *Anti Troli:* ${antitroli ? '✅' : '❌'}
├🔅 *Auto Backup DB:* ${backup ? '✅' : '❌'}
├🔅 *Group Mode:* ${group ? '✅' : '❌'}
├🔅 *Jadi Bots:* ${jadibot ? '✅' : '❌'}
├🔅 *Nsfw Mode:* ${nsfw ? '✅' : '❌'}
└────────────
    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
