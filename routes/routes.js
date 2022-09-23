import express from 'express'
import { addArgonaute, deleteArgonaute, getArgonaute, getArgonautes, updateArgonaute } from '../controllers/argonautesControllers.js'
import { catchErrors } from '../helpers.js'

// Path avec ES module
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Router

const router = express.Router()

router.get('/api/argonautes', catchErrors(getArgonautes))
router.get('/api/argonautes/:id', catchErrors(getArgonaute))
router.post('/api/argonautes', catchErrors(addArgonaute))
router.patch('/api/argonautes/:id', catchErrors(updateArgonaute))
router.delete('/api/argonautes/:id', catchErrors(deleteArgonaute))

// React

router.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


export default router