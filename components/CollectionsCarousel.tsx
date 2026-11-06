"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const CollectionsCarousel = () => {
    const slides: Slide[] = [
        {
            imageUrl: "cushionhero.png",
        },
        {
            imageUrl: "eyehero.png",
        },
        {
            imageUrl: "liphero.png",
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

export default CollectionsCarousel;