/* This is our wrapper, which would give us our toolbars, brand, etc  */

import Header from './header'

const Layout = props => (
    <div id="layout">
        <Header />
        {props.children}
    </div>
)

export default Layout