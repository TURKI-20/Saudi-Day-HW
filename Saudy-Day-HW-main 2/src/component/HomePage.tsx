import React, { useState } from 'react'
import { Button, Container,Form,  Nav, Navbar, Row } from 'react-bootstrap'
import {
  MDBFooter,

} from 'mdb-react-ui-kit';
import { items } from '../DataSaudiD';

function HomePage({filtterbySearch}:any) {

    const [searchValue ,setSearchValue] = useState('')
    const onSearch =() => {
      filtterbySearch(searchValue)
      setSearchValue('')
    }

    filtterbySearch =(word: string) => {
      if(word !== ""){
  
      const newArr=items.filter((item)=> item.title=== word)
      setItemData(newArr)
    }
    }

    
  return (
    
    <div>
    <Row >
        <Navbar >
      <Container>
        <Navbar.Brand href="#">
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
             <Nav.Link href="#action1">الزي السعودي</Nav.Link>
            <Nav.Link href="#action2">خريطة المملكة</Nav.Link>
            <Nav.Link href="#action1">ايام زمان</Nav.Link>
            <Nav.Link href="#action2">اشهر المواشي</Nav.Link>
            <Nav.Link href="#action2">التراث</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
             type="text" 
             placeholder="ابحث هنا"
             className="mx-2"
             onChange={(e)=> setSearchValue(e.target.value) }
             value ={searchValue}>
             </Form.Control>
          <Button onClick={() => onSearch()}  variant="btn btn-success">بحث</Button>
            </Form>
             </Navbar.Collapse>
               </Container>
                 </Navbar>
                  </Row>
    <br />
      <h3 className='text' >أرررحب</h3>
    <div className="grid-container">
  <a href="#" className="block block-1">
    <div className="image">
      <img src="https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2>الزي السعودي</h2>
    </div>
  </a>
  <a href="#" className="block block-2">
    <div className="image">
      <img src="https://images.pexels.com/photos/4493205/pexels-photo-4493205.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">خريطة المملكة</h2>
    </div>
  </a>
  <a href="#" className="block block-3">
    <div className="image">
      <img src="https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">أيام زمان </h2>
    </div>
  </a>
  <a href="#" className="block block-4">
    <div className="image">
      <img src="https://images.pexels.com/photos/13126897/pexels-photo-13126897.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">أشهر المواشي</h2>
    </div>
  </a>
  <a href="#" className="block block-5">
    <div className="image">
      <img src="https://images.pexels.com/photos/11695881/pexels-photo-11695881.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">تراث</h2>
    </div>
  </a>
</div>
<br /><br />
<div>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
     

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' href='https://sa.linkedin.com/in/turki-al-boaireed-41b64624a'>
          TURKI FAHAD 
        </a>
      </div>
    </MDBFooter>
    </div>
    </div>
  )
}

export default HomePage

function setItemData(newArr: { id: number; title: string; }[]) {
  throw new Error('Function not implemented.');
}
