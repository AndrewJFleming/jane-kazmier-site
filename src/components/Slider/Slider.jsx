import React, { Component } from 'react';
import M from "materialize-css";

class Slider extends Component {
    state = {
        slides: [
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/marrowstone-lab-construction.jpg',
                alt: 'marrowstone labyrinth construction'            
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/marrowstone.jpg',
                alt: 'marrowstone labyrinth'
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/construction1.jpg',
                alt: 'st anne labyrinth construction'            
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/finished1.jpg',
                alt: 'st anne labyrinth fin'     
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/weaving-a.jpg',
                alt: 'green weaving'     
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/weaving-espalier.jpg',
                alt: 'green weaving espalier'   
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/basket-flower.jpg',
                alt: 'basket with flower'     
            },
            {
                src: 'https://ajf-general-images.s3-us-west-2.amazonaws.com/jane-k/basket.jpg',
                alt: 'basket'   
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