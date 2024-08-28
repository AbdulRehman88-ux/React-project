import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { items } from './Data';

useNavigate
const Navbari = ({setData,cart}) => {
    const navigate = useNavigate()
    
    const [searchTerm, setSearchTerm] = useState("")
    
    const filterByCategory =(category)=>{
    const element = items.filter((product)=>product.category === category)
    setData(element)
}

    const filterByPrice =(price)=>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
} 

const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
}
    return (
        <>
            <header className='sticky-top'>

               {/* Nav-Bar */}

                  {/* <div className="nav-bar">
                    <Link to={'/'} className="brand">E-Cart</Link>
                    <div className="search-bar">
                        <input type="text" placeholder='Search Product' />
                    </div>
                    <Link to={'/cart'} className="cart">Cart</Link>
                </div>  */}
                
               
               
               
               <nav className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src="https://i.pinimg.com/originals/cb/66/8c/cb668cd9b0bf1220046193aa966a19cc.jpg" alt="Amazon Logo" />
        </Link>
      </div>
     
      <form 
      onSubmit={handleSubmit}
      className="navbar-search">
        <input 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        type="text" 
        placeholder="Search" />
        <button type="button">
          <i className="fa fa-search"></i>
        </button>
      </form>

      
      <div className="navbar-links">
        <Link to={"/"} className="navbar-link">
          Hello, Sign in
        </Link>
        <Link to={"/"} className="navbar-link">
          Returns <br />& Orders
        </Link>
        <Link to={"/cart"} className="navbar-link">
        <button type="button" class="btn btn-primary position-relative">
  Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>
    </nav>
               







               
                {/* <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}

                
                
                {/* Nav-Bar */}


                {/* Nav-Bar-Wrapper */}

                <div className="nav-bar-wrapper">
                    <div className="item">Filter by{""}</div>
                    
                    <div
                    onClick={()=>setData(items)}
                    className="item">No Filter</div>
                    
                    <div 
                    onClick={()=>filterByCategory('mobiles')}
                    className="item">Mobiles</div>
                   
                    <div
                    onClick={()=>filterByCategory('laptops')}
                    className="item">Laptops</div>
                    
                    <div
                    onClick={()=>filterByCategory('tablets')}
                    className="item">Tablets</div>
                    
                    <div
                    onClick={()=>filterByPrice('29999')}
                    className="item">{"Upto "}29999</div>
                    <div
                    onClick={()=>filterByPrice('49999')}
                    className="item">{"Upto "}49999</div>
                    <div
                    onClick={()=>filterByPrice('69999')}
                    className="item">{"Upto "}69999</div>
                    <div
                    onClick={()=>filterByPrice('89999')}
                    className="item">{"Upto "}89999</div>

                </div>

                {/* Nav-Bar-Wrapper */}

                {/* <div className="banner">
                    
                 </div> */}








                {/* <div className='banner'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="assets/img3.jpg" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/img4.jpg" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/img5.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div> */}



            </header>


        </>
    )
}

export default Navbari