import Carousel from 'react-bootstrap/Carousel';
const Main = () => {
    return <main>
 <Carousel className='carrusel'>
      <Carousel.Item>
        <img src='https://i.pinimg.com/564x/9e/7b/0a/9e7b0a153818f2fd6df5c3181e38124e.jpg' height='700px' width='auto' ></img>
        <Carousel.Caption>
            
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.pinimg.com/564x/33/6d/d5/336dd5a06416215af284e010b987d357.jpg'  height='730px' width='auto'></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
           <img src='https://i.pinimg.com/564x/97/bd/e9/97bde9f2817a3a3087c55c574ae77263.jpg'  height='700px' width='auto'></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.pinimg.com/564x/25/4a/e6/254ae6db2db8586429357682ab88ad0d.jpg' height='700px' width='auto' ></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </main>;
}

export default Main;