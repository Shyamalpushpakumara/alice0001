let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `
-- [Group Link Inspector] --
${res.id}
*🔮 Subject:* ${res.subject}
*🎐 Made by* @${res.id.split('-')[0]} pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*🎐 Title changed by*@${res.subjectOwner.split`@`[0]} on *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*🎐 Description changed by* @${res.descOwner.split`@`[0]} on *${formatDate(res.descTime * 1000)}*` : ''}
*🎐 Number of Members:* ${res.size}
*🎐 Members who are known to join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'There is not any'}
${res.desc ? `*Description:*
${res.desc}` : '*No Description*'}

*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await conn.getProfilePicture(res.id).catch(console.error)
  if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', null, m)
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(caption)
    }
  })
}
handler.help = ['inspect <chat.whatsapp.com>']
handler.tags = ['tools']

handler.command = /^inspect$/i

module.exports = handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
