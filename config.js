global.owner = [
  "6285182457140",
  ""
]
global.namabot = "Ryoo - MD"
global.ownername = "Haidar?"
global.pack = "Ryoo - MD"
global.author = "Hann Universe!!"
global.channelname = "Info Bot Mahiru-MD"
global.channeljid = "120363291817681099@newsletter"
global.linkgc = "https://chat.whatsapp.com/JzcVI6cExQRLlPOFhI2d6u"
global.linksl = "https://whatsapp.com/channel/0029VadDSPFATRSjubfKrU1n"
global.public = true
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})