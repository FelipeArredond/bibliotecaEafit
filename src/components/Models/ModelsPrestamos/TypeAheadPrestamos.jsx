import { Typeahead } from 'react-bootstrap-typeahead'
import { useState } from "react"
import { Link } from 'react-router-dom'


export default function TypeAheadPrestamos(props) {

    const estudiantes = [
        {
            id: 1,
            documento: 'CC-123',
            nombre: 'Giovanni',
            personaje: 'El zarco'
        },
        {
            id: 2,
            documento: 'CC-321',
            nombre: 'Anderson',
            personaje: 'mohico'
        }

    ]


    return (
        <div>
            <Typeahead
                id='typeahead'
                onChange={estudiantes => {
                    if (props.estudiantes.findIndex(x => x.id === estudiantes[0].id) === -1) {
                        props.onAdd([...props.estudiantes, estudiantes[0]])
                    }

                    console.log(estudiantes)
                }}
                options={estudiantes}
                labelKey={estudiante => estudiante.documento}
                filterBy={['documento']}
                placeholder='Id estudiante'
                minLength={2}
                flip={true}
                renderMenuItemChildren={estudiante => (
                    <>
                        <span>{estudiante.personaje}</span>
                    </>
                )}
            />

            <ul className='list-group'>
                {
                    props.estudiantes.map(estudiante => <li key={estudiante.id} >{estudiante.nombre}</li>)
                }
            </ul>

        </div>
    )
}