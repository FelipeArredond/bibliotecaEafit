import Inicio from '../pages/Inicio';
import Libros from '../pages/Libros'
import Prestamos from '../pages/Prestamos'
import Multas from '../pages/Multas';


const internalRoutes
= [
    {path: '/inicio', componente: Inicio},
    {path: '/libros', componente: Libros},
    {path: '/prestamos', componente: Prestamos},
    {path: '/multas', componente: Multas},
]

export default internalRoutes