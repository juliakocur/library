import Welcome from "./welcome/Welcome";
import About from "./about/About";
import Favorites from "./favorites/Favorites";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Welcome />
                <About />
                <Favorites />
            </div>
        </main>
    )
}

export default Main;
