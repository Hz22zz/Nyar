let handler = async m => m.reply(`
            .✵.GRUP HZ22BOTZ.✵.

            https://chat.whatsapp.com/BiNW2fsXbIJJOj5yHq6KHz
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
