import './Shop.css';
import { TypeMenu } from '../../../shared/types/types';
import { MENU } from '../../../shared/data/menu';
import Menu from './Menu';

const Shop = () => {
    return (
        <section className="shop">
            <h2 className="section-header">Coffee Shop</h2>
            <p className="shop-text">In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. 
            you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.</p>
            <div className="shop-menu">
                <div className="left-menu">
                    <div className="left-menu-tittle">Coffee & Tea</div>
                    {MENU['Coffee & Tea'].map((item: TypeMenu) => (
              <Menu
                key={item.name}
                name={item.name}
                price={item.price}
              />
            ))}
                </div>
                <div className="right-menu">
                    <div className="right-menu-tittle">Desserts & Cakes</div>
                    {MENU['Desserts & Cakes'].map((item: TypeMenu) => (
              <Menu
                key={item.name}
                name={item.name}
                price={item.price}
              />
            ))}
                </div>
            </div>
        </section>
    )
}

export default Shop;
