const axios = require("axios");

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (/image/.test(mime)) {
    let img = await q.download();
    let imgbase64 = img.toString("base64");
    let data = await axios.post(
      "https://xteam.xyz/removebg",
      {
        "api-key": "ea25ce2bb9efb7c5",
        image: imgbase64,
      }
    );
    await conn.sendFile(m.chat, data.data.image, "", "ᵏᵒⁿᵗᵒˡᵒᵈᵒⁿ", m, false);
  } else throw `reply photo with command ${usedPrefix + command}`;
};
handler.help = ["removebg", "nobg"];
handler.tags = ["tools"];
handler.command = /^(nobg|removebg)$/i;

module.exports = handler;
