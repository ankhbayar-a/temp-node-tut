const path = require('path')
console.log(path.sep)

const filePath = path.join('/node-express-course-main/', 'README.MD')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'node-express-course-main', 'README.MD')
console.log(absolute)