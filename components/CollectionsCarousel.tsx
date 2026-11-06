"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const CollectionsCarousel = () => {
    const slides: Slide[] = [
        {
            imageUrl: "powder1.png",
        },
        {
            imageUrl: "lip1.png",
        },
        {
            imageUrl: "eye1.png",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
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