async function handler(m, { command, usedPrefix, isOwner }) {
    if (!global.db.data.settings[this.user.jid].anon) return await this.sendButton(m.chat, isOwner ? 'Activate' : 'Anonymous Chat is turned off', '© Alice 🥀', isOwner ? 'Activate' : 'Owner', isOwner ? '.on anon' : '.owner', m)
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return await this.sendButton(m.chat, '_You are not in anonymous chat_', '© Alice 🥀', 'Find Partner', `${usedPrefix}start`, m)
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Partner left the chat_', '© Alice 🥀', 'Find Partner', `${usedPrefix}start`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return await this.sendButton(m.chat, '_You are still in anonymous chat, waiting for a partner_', '© Alice 🥀', 'Go out', `${usedPrefix}leave`, m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_Partner found!_', '© Alice 🥀', 'Next', `${usedPrefix}next`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.b, '_Partner found!_', '© Alice 🥀', 'Next', `${usedPrefix}next`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Waiting for partners..._', '© Alice 🥀', 'Go out', `${usedPrefix}leave`, m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

module.exports = handler
