import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Banners = () => {
  return (
    <div className='banner'>
     <Carousel>
      <Carousel.Item interval={300}>
        <img
        className='d-block w-100'
         src='https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg'
         alt='First' />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      
      
      <Carousel.Item interval={500}>
      <img 
        className='d-block w-100'
         src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
         alt=''/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      
      
      <Carousel.Item interval={500}>
      <img 
      className='d-block w-100'
      src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'
      alt=''/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banners