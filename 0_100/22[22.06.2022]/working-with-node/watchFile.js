import * as fs from 'node:fs'
import * as moment from "moment"

const filePath = 'static/file.txt'

fs.watchFile(filePath, (current, updated) => console.log(`${filePath} updated ${ current.mtime }`))
