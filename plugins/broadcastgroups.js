let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Sends a broadcast message to ${groups.length} groups\nEstimated completion ${groups.length * 1.5} seconds`, m)
  for (let id of groups) {
    await conn.delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Alice Broadcast -🥀* 」\n\n' + teks + '\n\n© Alice 🥀'), true).catch(_ => _)
  }
  m.reply('*Broadcast Complete*')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

module.exports = handler 
