import { Link } from 'gatsby';
import React from 'react'

import * as styles from './DetaliiCurs.module.css'

const DetaliiCurs = ({ curs }) => {

    return (
        <div className="grid">
            <p className="h3 text-center uppercase text-blue-400 mb-10 md:mb-20">Informatii utile</p>
            <div className={[styles.box, "mb-10 md:mb-20"].join(' ')}>
                <div>
                    <h4 className="text-blue-400 mb-5">Detalii</h4>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="mr-2 p opacity-50">Tipul cursului:</span>
                            <span className="p semibold">{curs.type}</span>
                        </li>
                        <li>
                            <span className="mr-2 p opacity-50">Cod NC:</span>
                            <span className="p semibold">{curs.code}</span>
                        </li>
                        <li>
                            <span className="mr-2 p opacity-50">Durata cursului:</span>
                            <span className="p semibold">{curs.duration}</span>
                        </li>
                        <li>
                            <span className="mr-2 p opacity-50">Conditii inscriere:</span>
                            <span className="p semibold">{curs.conditions}</span>
                        </li>
                        <li>
                            <span className="mr-2 p opacity-50">Tarif:</span>
                            <span className="p semibold">{curs.price}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-blue-400 mb-5">Acte necesare inscrierii</h4>
                    <ul className="list-disc list-inside">
                        {curs.documents.split('\n').map((item, index) => {
                            if(item !== "") {
                                return <li key={index} className="p">{item}</li>;
                            }
                        })}

                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <h4 className="text-blue-400 mb-3">Descriere:</h4>
                <p className="mb-4 whitespace-pre-line">{curs.description}</p>
            </div>
            <div className="mb-10 md:mb-20">
                <h4 className="text-blue-400 mb-3">Absolvire:</h4>
                <p className="whitespace-pre-line">{curs.notes}</p>
            </div>
            <Link className="btn btn-secondary justify-self-center btn-big mb-2"
                to={`/#formular`}
                state={{
                    selected: curs.id
                }}
            >
                Inscrie-te
            </Link>
        </div>
    )
}

export default DetaliiCurs
