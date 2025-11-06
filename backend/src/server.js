import express from 'express'
import { ENV } from './lib/env.js'
import path, { dirname } from 'path'

const app = express()

const __dirname = path.resolve()

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'success from backend' })
})

app.get('/books', (req, res) => {
    res.status(200).json({ books: 'This is the book endpoint' })
})

//make our app ready for deployment
if (ENV.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist/')))

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
    })
}

app.listen(ENV.PORT, () => {
    console.log('Server is running on port', ENV.PORT)
})
