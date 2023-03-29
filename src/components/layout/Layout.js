import { Loader } from "components/loader/Loader";
import Navigation from "components/navigation/Navigation"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
}

export default Layout