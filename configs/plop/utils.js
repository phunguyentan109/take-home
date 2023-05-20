const fs = require('fs')
const path = require('path')

function isModuleExist(name) {
  const existModules = fs.readdirSync(path.join(__dirname, '../../pages/api'))
  return existModules.indexOf(name) >= 0
}

function isPageExist(name) {
  const existModules = fs.readdirSync(path.join(__dirname, '../../pages'))
  return existModules.indexOf(name) >= 0
}

function isReduxExist(name) {
  const existModules = fs.readdirSync(
    path.join(__dirname, '../../common/redux')
  )
  return existModules.indexOf(name) >= 0
}

const paths = {
  root: '../..',
  pageModule: 'modules',
  apiModule: 'modules/api',
}

const addRoot = (path) => `${paths.root}/${path}`
const pageModule = (path) => `${paths.root}/${paths.pageModule}/${path}`
const apiModule = (path) => `${paths.root}/${paths.apiModule}/${path}`

module.exports = {
  isModuleExist,
  isPageExist,
  addRoot,
  pageModule,
  isReduxExist,
  apiModule,
}
