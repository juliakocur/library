import { TypeMenu } from '../../../shared/types/types';
import './Menu.css';

const Menu = ({ name, price }: TypeMenu) => {
  return (
    <div className="menu-item">
      <span className="menu-item-name">{name}</span>
      <div className="menu-item-price-wrapper">
        <span className="menu-item-line" />
        <span className="menu-item-price">{`$${price}`}</span>
      </div>
    </div>
  );
}

export default Menu;
