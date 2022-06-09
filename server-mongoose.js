const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/street-fighters'

const Character = require('./models/Character')

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

// callback method
// const ryu = new Character ({
//     name: 'Ryu',
//     ultimate: 'Shinku Hadoken'
// })


// ryu.save(function (error, document) {
//     if (error) console.error(error)
//     console.log(document)
// })


// promises method
//   function saveCharacter (character) {
//     const c = new Character(character)
//     return c.save()
//   }
  
//   saveCharacter({
//     name: 'Ryu',
//     ultimate: 'Shinku Hadoken'
//   })
//     .then(doc => { console.log(doc) })
//     .catch(error => { console.error(error) })
  
    

// async await method  
    async function runCode() {
        const ryu = new Character({
          name: 'Ryu',
          ultimate: 'Shinku Hadoken'
        })
      
        const doc = await ryu.save()
        console.log(doc)
      }
      
      runCode()
        .catch(error => { console.error(error) })
      
const ryus = await Character.findOne({ name: 'Ryu' })
console.log(ryus)

const chars = await Character.find({ name: 'Ryu' })
console.log(chars)
// returns entire doc
const charsAll = await Character.find()
console.log(charsAll)


// updating

const characterSchemaUpdate = new Schema({
    name: { type: String, unique: true },
    specials: Array,
    ultimate: String
  })

  const characterUpdate = mongoose.model('characterUpdate',characterSchemaUpdate)


const ryusearch = await Character.findOne({ name: 'Ryu' })
console.log(ryusearch)


ryusearch.specials = [
  'Hadoken',
  'Shoryuken',
  'Tatsumaki Senpukyaku'
]

const doc = await ryu.save()
console.log(doc)

// alternative way


const doc = await Character.findOneAndUpdate(
    { name: 'Ryu' },
    {
      specials: [
        'Hadoken',
        'Shoryuken',
        'Tatsumaki Senpukyaku'
      ]
    })
  
  console.log(doc)


// deleting

const ryuk = await Character.findOne({ name: 'Ryu' })
const deleted = await ryuk.remove()

// alternative way

const deleted2 = await Character.findOneAndDelete({ name: 'Ken' })



// https://zellwk.com/blog/mongoose/