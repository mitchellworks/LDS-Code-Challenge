const withSass = require('@zeit/next-sass')
module.exports = withSass()

// for static html file export, if needed
// module.exports.exportPathMap = () => {
//         return {
//             '/': { page: '/' }
//         }
// }