const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mateus/Documents/www/mateus-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mateus/Documents/www/mateus-blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mateus/Documents/www/mateus-blog/src/pages/index.js"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/mateus/Documents/www/mateus-blog/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/mateus/Documents/www/mateus-blog/src/templates/tag.jsx")))
}

