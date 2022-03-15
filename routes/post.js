const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')

_({
  method: 'GET',
  path: '/api/posts',
  input: {
    // 
    // please check https://github.com/CyrusMang/c-validator-js for the validator lib
    // All validated and sanitized data will put into "ctx.state" object
    // 
    query: {
      page: 'integer'
    },
  },
  handler: [
    async (ctx, next) => {
      try {
        const page = ctx.state.query.page || 1
        const posts = await m('Post').all(ctx, page)
        ctx.body = posts.map(s => s.data)
      } catch (e) {
        throw e
      }
    }
  ]
})

_({
  method: 'POST',
  path: '/api/posts',
  input: {
    body: {
      title: 'required',
      // ...
    },
  },
  handler: [
    async (ctx, next) => {
      try {
        //
      } catch (e) {
        throw e
      }
    }
  ]
})