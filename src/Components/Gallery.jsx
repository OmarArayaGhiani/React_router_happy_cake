import ImagesGallery from "../Assets/js/Gallery"
import "../Assets/css/gallery.css"

const Gallery = () => {
    return(
        <section className="mx-auto my-5">
            {ImagesGallery.map((element, index) => (
                <img src={element.src} key={index} alt=""/>
            ))}
        </section>
    )
}

export default Gallery