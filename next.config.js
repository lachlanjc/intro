const withTM = require('next-transpile-modules')(['@geist-ui/react'])
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withTM(withMDX({ pageExtensions: ['js', 'mdx'] }))
