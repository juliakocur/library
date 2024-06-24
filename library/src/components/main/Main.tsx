import Welcome from "./welcome/Welcome";
import About from "./about/About";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Welcome />
                <About />
            </div>
        </main>
    )
}

export default Main;
