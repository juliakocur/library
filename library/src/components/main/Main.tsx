import Welcome from "./welcome/Welcome";
import About from "./about/About";
import Favorites from "./favorites/Favorites";
import Shop from "./shop/Shop";
import Contacts from "./contacts/Contacts";
import Card from "./card/Card";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Welcome />
                <About />
                <Favorites />
                <Shop />
                <Contacts />
                <Card />
            </div>
        </main>
    )
}

export default Main;
