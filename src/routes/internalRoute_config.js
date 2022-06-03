import Inicio from '../pages/Inicio';
import Libros from '../pages/Libros'
import Prestamos from '../pages/Prestamos'
import Student from '../pages/Student';


const internalRoutes
= [
    {path: '/inicio', componente: Inicio},
    {path: '/libros', componente: Libros},
    {path: '/prestamos', componente: Prestamos},
    {path: '/estudiante', componente: Student},
]

export default internalRoutes