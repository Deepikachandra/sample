import './Css/Header.css';
import { Button } from 'primereact/button';

function Products({cartItem,setCartItem}) {
  const products= [{
    itemImg:"https://www.stoneheadbikes.com/uploads/5f329b6913cb8.jpg",
    productName:"Honda Activa",
    rate:6
  },
  {
    itemImg:"https://www.stoneheadbikes.com/uploads/5f328c1ebbc87.jpg",
    productName:"Bajaj Pulsar",
    rate:7
  },
  {
    itemImg:"https://www.stoneheadbikes.com/uploads/5f329f0b0ed97.jpg",
    productName:"Bajaj Avenger",
    rate:8
  }]
  return (
    <div>
      <h2>Most popular rented items</h2>
    <div className="p-grid">
      {products.map(item => {
        return(
          <div className="p-col p-dir-col">
          <div className="p-col"><img className="product-img" src={item.itemImg}/></div>
          <div className="p-col product-img">{item.productName}</div>
          <div className="p-col product-img">Starts from Rs.{item.rate}/Hour</div>
          <div className="p-col product-img"><Button id="addToCart-button" label="Add to cart" onClick={() => setCartItem(Number(cartItem)+1)}/></div>
         </div>   
        )
      })}
    </div>
    </div>
  );
}

export default Products;
