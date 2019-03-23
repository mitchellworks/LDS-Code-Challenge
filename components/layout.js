import Header from './header'

const Layout = props => (
    <div id="layout">
        <Header />
        {props.children}
    </div>
)

export default Layout