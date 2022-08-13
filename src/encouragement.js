const Database = require('@replit/database')
const db = new Database()

const starterEncouragements = [
  'Cheer up',
  'Hang in there!',
  'You are a great person / bot!',
]

const sadWords = ['sad', 'depressed', 'unhappy', 'angry', 'miserable']

db.get('encouragements').then((encouragements) => {
  if (!encouragements || encouragements.length < 1) {
    db.set('encouragements', starterEncouragements)
  }
})

const giveEncouragement = (msg, msgContent) => {
  if (sadWords.some((word) => msgContent.includes(word))) {
    const encouragement =
      starterEncouragements[
        Math.floor(Math.random() * starterEncouragements.length)
      ]
    msg.reply(encouragement)
  }
}
const updateEncouragements = (encouragingMesage) => {
  db.get('encouragements').then((encouragements) => {
    encouragements.push([encouragingMesage])
    db.set('encouragements', encouragements)
  })
}

const deleteEncouragements = (index) => {
  db.get('encouragements').then((encouragements) => {
    if (encouragements.length > index) {
      encouragements.splice(index, 1)
      db.set('encouragements', encouragements)
    }
  })
}

module.exports = {
  giveEncouragement,
  updateEncouragements,
  deleteEncouragements,
}
