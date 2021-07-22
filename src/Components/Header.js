import './Css/Header.css';
import { Button } from 'primereact/button';

function Header({cartItem}) {
  return (
    <div >
    <div className="p-grid header">
    <div className="p-col">Bike on rent</div>
    <div className="p-col">Select city</div>
    <div className="p-col">Offers</div>
    <div className="p-col">Terrif</div>
    <div className="p-col">Search</div>
    <div className="p-col"><Button id="cart-button" label={cartItem?cartItem:"0"} icon="pi pi-shopping-cart" iconPos="left" /></div>
    </div>
    </div>
  );
}

export default Header;
