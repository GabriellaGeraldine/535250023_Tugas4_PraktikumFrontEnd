"use client"
import { NormalizeError } from 'next/dist/shared/lib/utils';
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            imageUrl: "pic3.png",
        },
        {
            imageUrl: "pic1.png",
        },
        {
            imageUrl: "pic2.png",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"contain",
                            backgroundPosition:"center",
                            backgroundRepeat: 'no-repeat',
                            height:"60vh",
                        }}>
                    </div>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;