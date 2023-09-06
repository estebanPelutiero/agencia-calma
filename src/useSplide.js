import { useEffect, useState } from "react";

const getNumberOfSlides = () => {
    const width = window.innerWidth;

    if (width > 1200) {
        return 5
    } else if (width > 600) {
        return 3
    } else {
        return 2
    }
}

export const useSplide = () => {
    const [numberOfSlides, setNumberOfSlides] = useState(getNumberOfSlides());

    useEffect(() => {
        const handleResize = () => {
            setNumberOfSlides(getNumberOfSlides());
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return numberOfSlides
}