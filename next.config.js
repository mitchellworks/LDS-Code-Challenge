/* Let's use SASS, because it's cool. But we could just do inline styles in each component, instead. */

const withSass = require('@zeit/next-sass');
module.exports = withSass();

// For static html file export, if needed. We're doing a dynamic site (JS, not HTML), for now.
// module.exports.exportPathMap = () => {
//         return {
//             '/': { page: '/' }
//         }
// }