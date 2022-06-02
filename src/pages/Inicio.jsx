import Menu from "../components/Menu";
import "../pages/css/inicio.css";
import InicioSesion from "./InicioSesion";

export default function Inicio(){
    return(
        <div>  
            <Menu/>

            <div id="kiko-slider">
  
  <ul class="slider">
    <li id="slide1">
      <img src="https://i.ibb.co/3TSsKxf/bibliotc.jpg"/>
    </li>
    <li id="slide2">
      <img src="https://i.ibb.co/pb0Hgj7/libros.jpg"/>
    </li>
    <li id="slide3">
      <img src="https://i.ibb.co/wNcTFwf/animat.jpg"/>
    </li>
  </ul>
  
  <ul class="menu">
    <li>
      <a href="#slide1"></a>
    </li>
    <li>
      <a href="#slide2"></a>
    </li>
     <li>
      <a href="#slide3"></a>
    </li>
  </ul>

  
</div>
        </div>
        
    )
}