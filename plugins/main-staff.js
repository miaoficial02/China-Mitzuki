let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `🇨🇳 𝑬𝑸𝑼𝑰𝑷𝑶 𝑫𝑬 𝑪𝑶𝑳𝑨𝑩𝑶𝑹𝑨𝑫𝑶𝑹𝑬𝑺 🇨🇳
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

👑 *Creador:*

💋 𝑪𝑯𝑰𝑵𝑰𝑻𝑨 | ᵒᶠᶦᶜᶦᵃˡ
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/miaoficial02

⚠️ *𝙊𝙏𝙍𝘼𝙎 𝙍𝙀𝘿𝙀𝙎:*

👑 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
> 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 » *Mia*
> 🌐 𝙻𝙸𝙽𝙺 » https://www.instagram.com/its.mia.oficial

👑 𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖
> 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 » *𝙼𝚒𝚊*
> 🌐 𝙻𝙸𝙽𝙺 » t.me/Chinitx_oficixl

👑 𝙿𝚊𝚐𝚒𝚗𝚊 𝙻𝚞𝚗𝚊-𝙱𝚘𝚝
>  𝙲𝚁𝙴𝙰𝙳𝙾𝚁 » *𝙼𝚒𝚊*
> 🌐𝙻𝙸𝙽𝙺 » http://bit.ly/4lzTWva

`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
