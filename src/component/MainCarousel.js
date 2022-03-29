import React from 'react';
import "../css/Main.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
function MainCarousel(props) {
    return (
        <div className='carousel'>
            <Carousel >
                <Carousel.Item >
                        <img
                        src="http://blog.jinbo.net/attach/615/200937431.jpg"
                        alt="First slide"
                        className='carousel_img'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src="http://blog.jinbo.net/attach/615/200937431.jpg"
                        alt="Second slide"
                        className='carousel_img'/>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src="http://blog.jinbo.net/attach/615/200937431.jpg"
                        alt="Third slide"
                        className='carousel_img'/>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainCarousel;