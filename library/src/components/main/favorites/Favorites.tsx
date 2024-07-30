import BOOKS from '../../../shared/data/books';
import './Favorites.css';

type TypeSeasons = 'Winter' | 'Spring' | 'Summer' | 'Autumn';
const SeasonButtons: TypeSeasons[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

const Favorites = () => {
    return (
        <section className="favorites" id="favorites">
            <h2 className="section-header">Favorites</h2>
            <p className="favorites-pick">Pick favorites of seasone</p>
            <div className="favorites-buttons">
            {SeasonButtons.map((button) => (
              <div className="favorites-button-container" key={button}>
                <input
                className="favorites-circle"
                  type="radio"
                  name={button.toString()}
                  id={button}
                />
                <label htmlFor={button}>{button}</label>
              </div>
            ))}
          </div>
            <ul className="favorites-books">
                  {BOOKS[0].map((book, i) => (
                      <li key={i} className="favorites-book">
                        <div className="favorites-item">
                          <div className="item-header">Staff Picks</div>
                          <div className="item-book">
                              <div className="item-name">{book.name}</div>
                              <div className="item-author">{book.author}</div>
                          </div>
                          <div className="item-description">{book.description}</div>
                        </div>
                        <button className="button-book">Buy</button>  
                        <div className="img-wrapper">
                          <img src={book.img} alt="book" className="item-img" />
                        </div>                
                      </li>
                  ))}
              </ul>
         
        </section>
    );
};

export default Favorites;
