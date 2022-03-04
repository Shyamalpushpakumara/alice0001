const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} Colombo`
    let res = await fetch(API('https://api.openweathermap.org', '/data/2.5/weather', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.cod != 200) throw json
    m.reply(`
📍 Location: ${json.name}
🌎 Country: ${json.sys.country}
🌦️ Weather: ${json.weather[0].description}
🌡️ Current temperature: ${json.main.temp} °C
📈 Highest temperature: ${json.main.temp_max} °C
📉 Lowest temperature: ${json.main.tmemp_min} °C
💦 Humidity: ${json.main.humidity} %
🌪 Wind: ${json.wind.speed} km/hour
    `.trim())
}

handler.help = ['weather']
handler.tags = ['internet']
handler.command = /^(cuaca|weather)$/i

module.exports = handler
