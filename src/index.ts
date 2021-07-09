import app from './app'
import { config } from './config'

app.listen(config.PORT, () => {
  console.log(`server running at http://localhost:${config.PORT}`)
})
