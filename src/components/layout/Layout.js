const { default: Navigation } = require("components/navigation/Navigation")
const { Outlet } = require("react-router-dom")

const Layout = () => {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout