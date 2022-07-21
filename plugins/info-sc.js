import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Mau Sc Banh? Chat Owner:v*\n© _Fachri_`
conn.sendButtonDoc(m.chat, str, wm, 'Owner','.owner', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
