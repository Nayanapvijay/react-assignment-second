import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({item}){
    const addToCart=(productName)=>{
        alert (`${productName} added to cart` );
    }
    return(
        <Card>
      <Card.Img variant="top" src={item?.image} className='productimage'/>
      <Card.Body>
        <Card.Title>{item?.title.slice(0,20)}</Card.Title>
        <Card.Text>
          {item?.description.slice(0,30)}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(item.title.slice(0,20))}>Add to Cart</Button>
      </Card.Body>
    </Card>
    )
}
export default Productcard;