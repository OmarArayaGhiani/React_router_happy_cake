import Icon_cake from "../Assets/Img/Icon_cake.png"
import "../Assets/css/home.css"
import Gallery from "../Components/Gallery"

const Home = () => {
  return (
  <>
    <div className="text-center">
      <h1 className="mt-4 mb-3">Bienvenido a Happy Cake</h1>
      <h4 className="mb-4">El lugar de los pasteles felices</h4>
      <img src={Icon_cake} alt="Ícono de pastel" className="icon_img"/>
      <Gallery />
    </div>
  </>
  )
}

export default Home
