import mongoose from 'mongoose'
import mongooseLong from 'mongoose-long'


mongoose.Promise = global.Promise
mongooseLong(mongoose)

mongoose.connection.on('open', (ref)=>{
    console.log(`mongodb 连接成功 ...`)
})

mongoose.connection.on('error', (err)=>{
    console.log(`mongodb 连接失败 ...`, err)
})

mongoose.connect('mongodb://localhost:27017/graphql')



 