import { Link } from 'gatsby';
import React from 'react'

import * as styles from './DetaliiCurs.module.css'

const DetaliiCurs = ({ curs }) => {

    return (
        <div className="grid">
            <p className="h3 text-center uppercase text-blue-400 mb-10 md:mb-20">Detalii curs</p>
            <div className={[styles.box, "mb-10 md:mb-20"].join(' ')}>
                <div>
                    <h4 className="text-blue-400 mb-5">Acte necesare inscrierii</h4>
                    <ul className="list-disc list-inside">
                        <li className="p">Copie BI</li>
                        <li className="p">Copie certificat de nastere</li>
                        <li className="p">Copie diploma de studii</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-blue-400 mb-5">Pretul si durata cursului</h4>
                    <ul className="list-disc list-inside">
                        <li className="p">Pret: 1400lei</li>
                        <li className="p">Se poate achita in rate</li>
                        <li className="p">Cursul dureaza 15 saptamani.</li>
                        <li className="p">Programul se incheie cu examen de tip grila si proba practica.</li>
                    </ul>
                </div>
            </div>
            <div className="mb-10 md:mb-20">
                <h4 className="text-blue-400 mb-3">Descriere:</h4>
                <p>
                    Maşinistul la maşini pentru terasamente este conducătorul
                    de maşini şi utilaje pentru terasamente, care conduce,
                    întreţine şi supraveghează instalaţii, agregate şi utilaje
                    destinate executării lucrărilor de terasamente conform cărţii
                    tehnice a acestora. Cursul este autorizat ANC, certificatele
                    eliberate in urma absolvirii avand recunoastere nationala si
                    la nivelul UE.
                </p>
            </div>
            <div className="mb-10 md:mb-20">
                <h4 className="text-blue-400 mb-3">Tematica abordata:</h4>
                <ul className="list-disc list-inside">
                    <li className="p">Perfectionarea pregatirii profesionale;</li>
                    <li className="p">Respectarea normelor de PM, PSI si a Prescriptiilor tehnice ISCIR;</li>
                    <li className="p">Completarea documentelor;</li>
                    <li className="p">Pregatirea si verificarea vehiculului pentru lucru;</li>
                </ul>
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
