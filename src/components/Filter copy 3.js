import { Row, Col,Form } from "react-bootstrap";
import React, { Component,useState } from "react";
import { useHistory,Router } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import data from "../data/fakeData";
import styles from "./Filter.module.css";
import TypeRent from "./TypeRent";
import CardItem from "../components/CardItem"

function Filter() {

  const router = useHistory();
  const { rent,  bathroom,  bedroom,  Furnished,  price,  SharedCommodities,  PetAllowed,data:data} = useState("");
  
  const handlePushToDetail = (id) => {
    console.log(id);
    router.push(`restaurant/${id}`);
  };
   
   const fil=(data)=>{
    const newList =  {data.filter(person => person.age < 60)}

   }

  
    const bathrooms = ["1", "2", "3","4","5+"];
    const bedrooms = ["1", "2", "3","4","5+"];
    const rents = ["day", "month", "year"];
    // const rentToShow = data.filter(item => ( item.rent === item.rent));
    return (
        <div>
        <Row>
          <Col xs={4}>
      <>
      <p className="h3 text-left font-weight-bold">Type Of Rent</p>

<form >
{rents.map((rent, index) => (
  <label key={index} style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
    {rent}
    <input   
    style={{display:"none"}}
      value={rent}
      checked={this.state.rent === rent}
      onChange={this.handleDuratuionChange}
      type="radio"
    />
  </label>
))}
</form>
          </>
          </Col>

        <Col xs={8}>
          <>
          
       
<Row>
      {rentToShow.map( (item,index)  => {
       const FurnishedValuex=item.Furnished
       const PetValuex=item.PetAllowed
       const ShareValuex=item.SharedCommodities
       if(FurnishedValuex === true){
           var Fur="Furnished"
            }
            if(PetValuex === true){
              var Pet="Pet Allowed"
          }
          if(ShareValuex === true){
              var Share="Shared ACommodities"
          }
       console.log(Fur)
         return (
          <Col key={index}>
                        <Card style={{ width: "18rem", marginBottom: "10px" }}>
                    <Card.Img  variant="top" src={item.image} height={200} style={{ objectFit: "cover" }}   />
                    <Card.Body>
                    <div class="card-img-overlay">
                    <Card.Title style={{color:"black",textShadow:"2px, 2px"}}>
                                <div className="room__amenity" >
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <h5>{Share}</h5>
                                </div>
                              </Card.Title>
                      </div>
                      <Card.Title>Rp.{item.price} / {item.rent} <p>{Fur}</p> </Card.Title>
                      <Card.Text>{item.bedroom} Beds,{item.bedroom}bedroom</Card.Text>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
          </Col>
      
        )
           
    })
}
</Row>
   
         
          </>

          </Col>
        </Row>
      </div>

      
        
        
       
      
    );
  
}
export default Filter;