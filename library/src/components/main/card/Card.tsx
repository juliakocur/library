import './Card.css';

const Card = () => {
    return (
        <section className="card" id="card">
            <h2 className="section-header">Digital Library Cards</h2>
            <div className="card-wrapper">
                <div className="card-find">
                    <div className="card-find-tittle">Find your Library card</div>
                    <form className="card-form">
                        <div className="card-form-wrapper">
                            <div className="card-form-subtittle">
                                Brooklyn Public Library
                            </div>
                            <input
                                className="input-name"
                                name="name"
                                type="text"
                                placeholder="Reader's name"
                            />
                            <input
                                className="input-number"
                                name="number"
                                type="text"
                                placeholder="Card number"
                            />
                        </div>
                        <button className="input-button">Check the card</button>
                    </form>
                </div>
                <div className="card-get">
                    <div className="card-get-tittle">Get a reader card</div>
                    <p className="card-get-text">You will be able to see a reader card after logging into account or you can register a new account</p>
                    <div className="card-get-buttons">
                        <button className="card-get-signup">Sign up</button>
                        <button className="card-get-login">Log in</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Card;
