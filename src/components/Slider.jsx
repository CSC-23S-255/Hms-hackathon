import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
           style={{height:'600px'}}
          className="d-block w-100 "
          src="https://images.alphacoders.com/111/1112475.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100 "
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;