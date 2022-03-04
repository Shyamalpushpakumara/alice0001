let fetch = require("node-fetch");
let handler = async (m, { conn }) => {
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/waifu"));
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "cartoon porn",
      "really like cartoons, stress...",
      m
    );
  else throw json;
};
handler.help = ["nsfwwaifu", "waifunsfw"];
handler.tags = ["anime"];

handler.command = /^(nsfwwaifu|waifunsfw)$/i;

handler.limit = true;

module.exports = handler;
