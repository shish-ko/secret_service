import { Footer } from "@comps/Footer/Footer";
import { Header } from "@comps/Header/Header";
import { Outlet } from "react-router";

export const DefaultUI: React.FC = () => {

  return (
    <div className="app">
      <div className="app__container app__container_fullWidth">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}