import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function CardItem({ item, isProduct, handleClick }) {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    console.log(id);
    router.push(`restaurant/${id}`);
  };

  return (
    <>
    
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img
        variant="top"
        src={item.image}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
      <div class="card-img-overlay">
      <Card.Title style={{color:"black",textShadow:"2px, 2px"}}  > </Card.Title>
        </div>
        <Card.Title>Rp.{item.price} / {item.duration} </Card.Title>

        <Card.Text>{item.bedroom} Beds,{item.bathroom}Bathroom,{item.sqft} sqft</Card.Text>

        <Card.Text>{isProduct ? item.price : item.location}</Card.Text>
        {/* {isProduct && (
          <Button variant="warning" onClick={() => handleClick(item)}>
            Add to Cart
          </Button>
        )} */}
        {/* {!isProduct && (
        <Button variant="secondary" onClick={() => handlePushToDetail(item.id)}>
          Detail
        </Button>
        ) } */}
      </Card.Body>
    </Card>
    </>
  );
}

export default CardItem;
