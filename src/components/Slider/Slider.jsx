import React, { Component } from 'react';
import M from "materialize-css";

class Slider extends Component {
    state = {
        slides: [
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/marrowstone.jpg',
                alt: 'slide 1'
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/construction1.jpg',
                alt: 'slide 2'            
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/finished1.jpg',
                alt: 'slide 3'     
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/weaving-a.jpg',
                alt: 'slide 4'     
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/weaving-b1.jpg',
                alt: 'slide 5'   
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/weaving-b2.jpg',
                alt: 'slide 6'            
            }
        ]
    }


    componentDidMount() {
        let elements = document.querySelectorAll(".slider");
        M.Slider.init(elements);
    }

    render() {
        let slides = (
            this.state.slides.map(slide => (
                <li>
                    <img src={slide.src} alt={slide.alt}/>
                </li>
            ))
        )

        return (
                <div className="slider">
                    <ul className="slides">
                        {slides}
                    </ul>
                </div>
        )
    }
}

export default Slider;