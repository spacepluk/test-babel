import express from 'express'
import schema from './schema.graphql'
import testCdc from './test.cdc'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('HELLO World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
