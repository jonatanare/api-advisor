import dbConnect from './src/libs/db.js'
import { server } from './src/server.js'

dbConnect()
  .then(() => {
    console.log('Database connected')

    server.listen(8080, () => {
      console.log('Server listening on port 8080')
    })
  })
  .catch((error) => console.log('Error: ', error))
