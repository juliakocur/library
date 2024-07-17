import Welcome from "./welcome/Welcome";
import About from "./about/About";
import Favorites from "./favorites/Favorites";
import Shop from "./shop/Shop";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Welcome />
                <About />
                <Favorites />
                <Shop />
            </div>
        </main>
    )
}

export default Main;
