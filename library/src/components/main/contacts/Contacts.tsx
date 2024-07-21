import './Contacts.css';

const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="section-header">Our Contacts</h2>
            <div className="contacts-info">
                <div className="contacts-text">
                    <ul className="contacts-tittle">For all Library inquiries:
                        <li className="contacts-item">Please Call
                            <a href="tel:+16177302370"> (617) 730-2370</a>
                        </li>
                        <li className="contacts-item">For TTY service, please call
                            <a href="tel:+16177302370"> (617) 730-2370</a>
                        </li>
                        <li className="contacts-item">Putterham Library:
                            <a href="tel:+16177302385"> (617) 730-2385</a>
                        </li>
                    </ul>
                    <ul className="contacts-tittle-director">Senior Staff
                        <li className="contacts-item">Library Director:
                            <b>
                                <a href="mailto:AmandaHirst@gmail.com"> Amanda Hirst</a>
                            </b>
                        </li>
                        </ul>
                </div>
                <div className="contacts-map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.015975743674!2d-73.9912976!3d40.6956458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b649b8c3%3A0x6342a2291cea2e!2zMjg2IENhZG1hbiBQbGF6YSBXLCBCcm9va2x5biwgTlkgMTEyMDEsINCh0KjQkA!5e0!3m2!1sru!2spl!4v1696171340021!5m2!1sru!2spl"
                        className="contacts-map"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    />
                </div>
            </div>
        </section>
    )
};

export default Contacts;
