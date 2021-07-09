import app from './app'
import { config } from './config'
import dotenv from 'dotenv'

dotenv.config()

app.listen(config.PORT, () => {
  console.log(`server running at http://localhost:${config.PORT}`)
})
