// server/src/index.js
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 5000

// --- core middleware ---
app.use(cors({ origin: ['http://localhost:5173','http://127.0.0.1:5173'], credentials: true }))
app.use(morgan('dev'))
app.use(express.json())

// --- health route (always available) ---
app.get('/api/health', (req, res) => res.json({ status: 'ok', ts: new Date().toISOString() }))

// --- start server first ---
app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`)
})

/**
 * 🚩 ADD LAZY ROUTES HERE (AFTER listen)
 * Don’t have: import postRoutes from './routes/postRoutes.js' at the top.
 * We load them dynamically so a typo won’t crash the listener.
 */
;(async () => {
  try {
    const { default: postRoutes } = await import('./routes/postRoutes.js')
    const { default: categoryRoutes } = await import('./routes/categoryRoutes.js')
    app.use('/api/posts', postRoutes)
    app.use('/api/categories', categoryRoutes)
    console.log('Routes attached')
  } catch (e) {
    console.error('Route attach error:', e)
  }
})()

/**
 * (Optional) DB connect lazy too, so failures don’t kill the server
 */
;(async () => {
  try {
    const { default: connectDB } = await import('./config/db.js') // or { connectDB } if you used named export
    await connectDB()
    console.log('MongoDB connected')
  } catch (e) {
    console.error('MongoDB connection error:', e.message)
  }
})()

