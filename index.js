'use strict'

const Server = require('./src/server')
const Database = require('./src/config/database')
const Config = require('./src/config/env')

const Console = console

Database
  .connect()
  .then(() => {
    Console.log('Connected to MongoDB')
    Server().listen(Config.server.port, () =>
      Console.log(`Server running on port ${Config.server.port}`))
  }
  )
  .catch(err => {
    Console.log(err)
    process.exit(1)
  }
  )
