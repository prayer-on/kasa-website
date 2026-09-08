import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DetailBanner({imageUrls =[]}) {

 const [currentIndex, setCurrentIndex] = useState(0);
    if (!imageUrls || imageUrls.length === 0) return null;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
    };

    return(
    <div className="detail-banner">
    <img src ={imageUrls[currentIndex]}
         alt="slideshow of the property pictures"/>
    <button onClick={prevImage}><FontAwesomeIcon icon={faAngleLeft} className="slider-btn"/></button>
    <button onClick={nextImage}><FontAwesomeIcon icon={faAngleRight} className="slider-btn"/></button>
    </div>
    );
}

export default DetailBanner