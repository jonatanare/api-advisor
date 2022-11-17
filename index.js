import dbConnect from './src/libs/db.js'
import { server } from './src/server.js'

dbConnect()
    .then(() => {
        console.log('Database connected');
        server.listen(process.env.PORT || 8080, () => {
            console.log('Server listening on port 8080');
        })
    })
    .then((error) => console.log('Error: ', error))