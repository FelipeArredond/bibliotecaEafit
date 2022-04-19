import { Table } from "react-bootstrap"
import ListItem from "./ListItem"

export default function Libros(){
    return(
        <div>
            <div>
                <h3>Libros</h3>
            </div>
            <Table
                bordered
                dark
                hover
                responsive
                >
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Titulo
                    </th>
                    <th>
                        Autor
                    </th>
                    <th>
                        Edicion
                    </th>
                    <th>
                        Disponibilidad
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <ListItem tittle={'100 años de soledad'}
                    number={'1'}
                    autor={'gabo'}
                    edicion={'la disquera'}
                    disponibilidad={'ninguna'}
                    ></ListItem>
                    <ListItem tittle={'100 años de soledad'}
                    number={'2'}
                    autor={'gabo'}
                    edicion={'la disquera'}
                    disponibilidad={'ninguna'}
                    ></ListItem>
                    <ListItem tittle={'100 años de soledad'}
                    number={'3'}
                    autor={'gabo'}
                    edicion={'la disquera'}
                    disponibilidad={'ninguna'}
                    ></ListItem>
                </tbody>
            </Table>
        </div>
    )
}