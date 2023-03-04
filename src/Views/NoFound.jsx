import Cake_dog from "../Assets/Img/Cake_dog.jpeg"
import "../Assets/css/noFound.css"

const NoFound = () => {
  return (
    <div className="text-center mt-5">
      <h2>Error 404 - Página no encontrada</h2>
      <h3>Lo sentimos, el perro se comió el pastel !!</h3>
      <img src={Cake_dog} alt="" className="noFound_img mt-5"/>
    </div>
  )
}

export default NoFound
