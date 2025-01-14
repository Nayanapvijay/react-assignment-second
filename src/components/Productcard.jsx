import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
        <Link to={`productdetails/${item.id}`}><Button variant="primary" >View Product</Button></Link>
      </Card.Body>
    </Card>
    )
}
export default Productcard;