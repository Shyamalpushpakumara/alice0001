let fetch = require('node-fetch')

let handler = async (m, { }) => {
  let res = await fetch(API('https://v2.jokeapi.dev/', '/joke/dark', {}, ''))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  m.reply(`

🎗 Category: ${json.category}
🎋 Joke: ${json.setup}
🧨 delivery: ${json.delivery}
🔖 Language: ${json.lang}
 `.trim())
}



handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke|darkjokes)$/i

module.exports = handler
