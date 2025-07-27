import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    let userId;
    if (m.quoted && m.quoted.sender) {
        userId = m.quoted.sender;
    } else {
        userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    }

    let user = global.db.data.users[userId];

    let name = conn.getName(userId);
    let cumpleanos = user.birth || 'No especificado';
    let genero = user.genre || 'No especificado';
    let pareja = user.marry || 'Nadie';
    let description = user.description || 'Sin Descripción';
    let exp = user.exp || 0;
    let nivel = user.level || 0;
    let role = user.role || 'Sin Rango';
    let coins = user.coin || 0;
    let bankCoins = user.bank || 0;

    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');

    let profileText = `
「🇨🇳」 *𝐏𝐞𝐫𝐟𝐢𝐥* 「🇨🇳」｟@${userId.split('@')[0]}｠
${description}

「👤」 *𝐄𝐝𝐚𝐝* » ${user.age || 'Desconocida'}
「🎉」 *𝐂𝐮𝐦𝐩𝐥𝐞𝐚𝐧̃𝐨𝐬* » ${cumpleanos}
「⚥」 *𝐆𝐞́𝐧𝐞𝐫𝐨* » ${genero}
「💘」 *𝐂𝐚𝐬𝐚𝐝𝐨 𝐜𝐨𝐧* » ${pareja}

「🏆」 *𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚* » ${exp.toLocaleString()}
「🏅」 *𝐍𝐢𝐯𝐞𝐥* » ${nivel}
「🏅」 *𝐑𝐚𝐧𝐠𝐨* » ${role}

「🪙」 *𝐂𝐨𝐢𝐧𝐬 𝐂𝐚𝐫𝐭𝐞𝐫𝐚* » ${coins.toLocaleString()} ${moneda}
「💰」 *𝐂𝐨𝐢𝐧𝐬 𝐁𝐚𝐧𝐜𝐨* » ${bankCoins.toLocaleString()} ${moneda}
「💎」 *𝐏𝐫𝐞𝐦𝐢𝐮𝐦* » ${user.premium ? '✅' : '❌'}
  `.trim();

    await conn.sendMessage(m.chat, { 
        text: profileText,
        contextInfo: {
            mentionedJid: [userId],
            externalAdReply: {
                title: '「💋」𝐏𝐄𝐑𝐅𝐈𝐋 𝐃𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎「💋」',
                body: dev,
                thumbnailUrl: perfil,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['profile'];
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];

export default handler;
