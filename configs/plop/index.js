const {
  isModuleExist,
  isPageExist,
  addRoot,
  apiModule,
  pageModule,
  isReduxExist,
} = require('./utils')

module.exports = (plop) => {
  plop.setHelper('toLowerCase', function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1)
  })

  plop.setHelper('capitalize', function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  })

  const pageTmp = 'templates/page'
  plop.setGenerator('Client-side Page', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should this page be called?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return isPageExist(value)
              ? 'A page with this name already exists'
              : true
          }

          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: addRoot('pages/{{name}}/index.page.tsx'),
        templateFile: `${pageTmp}/page.hbs`,
      },
      {
        type: 'add',
        path: pageModule('{{name}}/endpoint.ts'),
        templateFile: `${pageTmp}/endpoint.hbs`,
      },
      {
        type: 'add',
        path: pageModule('{{name}}/slice.ts'),
        templateFile: `${pageTmp}/slice.hbs`,
      },
      {
        type: 'add',
        path: pageModule('{{name}}/style.tsx'),
        templateFile: `${pageTmp}/style.hbs`,
      },
    ],
  })

  const reduxTmp = 'templates/redux'
  plop.setGenerator('Client-side Global Redux API', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should this API be called?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return isReduxExist(value)
              ? 'A global redux api with this name already exists'
              : true
          }

          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: addRoot('common/redux/{{name}}/slice.ts'),
        templateFile: `${reduxTmp}/slice.hbs`,
      },
      {
        type: 'add',
        path: addRoot('common/redux/{{name}}/endpoint.ts'),
        templateFile: `${reduxTmp}/endpoint.hbs`,
      },
    ],
  })

  const apiTmp = 'templates/api'
  plop.setGenerator('Server-side API', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should this api be called?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return isModuleExist(value)
              ? 'An api with this name already exists'
              : true
          }

          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: addRoot('pages/api/{{name}}/index.api.ts'),
        templateFile: `${apiTmp}/api.hbs`,
      },
      {
        type: 'add',
        path: addRoot('pages/api/{{name}}/[id].api.ts'),
        templateFile: `${apiTmp}/api.hbs`,
      },
      {
        type: 'add',
        path: apiModule('{{name}}/{{toLowerCase name}}.d.ts'),
        templateFile: `${apiTmp}/type.hbs`,
      },
      {
        type: 'add',
        path: apiModule('{{name}}/{{toLowerCase name}}.controller.ts'),
        templateFile: `${apiTmp}/controller.hbs`,
      },
      {
        type: 'add',
        path: apiModule('{{name}}/{{toLowerCase name}}.service.ts'),
        templateFile: `${apiTmp}/service.hbs`,
      },
      {
        type: 'add',
        path: apiModule('{{name}}/{{toLowerCase name}}.repo.ts'),
        templateFile: `${apiTmp}/repo.hbs`,
      },
    ],
  })
}
