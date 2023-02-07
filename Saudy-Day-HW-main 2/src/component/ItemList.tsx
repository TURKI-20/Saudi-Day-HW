import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';


const ItemsList = ({itemsData}:any) => {
  return (
    <Row>
        {
            itemsData.length >= 1? (itemsData.map((items:any)=>{
                return(<Col sm="12" className='mb-3'>
                <Card className='d-flex flex-row' style={{backgroundColor: 'rgb(194, 194, 194'}}>
                    <Card.Img className='img-item' variant="top" src={items.imgUrl} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between'>
                        
                        <div className='item-title'>
                            {items.title}
                            </div>
                            <div className='item-location'>
                            {items.location}
                            </div>
                         </Card.Title>
                      <Card.Text className='py-3'>
                        <div className='item-description'>
                            {items.description}
                             </div>
                       
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>)
            })): <h1 className="text-center">No Items</h1>
        }
        
    </Row>
  )
}
export default ItemsList;