import React, { useReducer, useState } from 'react'
import Enums from '../enums/Enums';
import * as styles from './Form.module.css';

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    body: '',
    status: 'IDLE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateFieldValue':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'updateStatus':
            return {
                ...state,
                status: action.status
            }

        case 'reset':
        default:
            return INITIAL_STATE;
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { ORASE, LISTA_CURSURI } = Enums;

    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const setStatus = status => dispatch({
        type: 'updateStatus',
        status
    })

    //currying
    const updateFieldValue = field => event => {
        dispatch({
            type: 'updateFieldValue',
            field,
            value: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setStatus('PENDING')

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(state)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setStatus('SUCCESS')
            })
            .catch(error => {
                console.log(error);
                setStatus('ERROR')
            })
    }

    if (state.status === "SUCCESS") {
        return (
            <p className={styles.success}>
                Message sent!
                <button
                    type="reset"
                    onClick={() => dispatch({ type: 'reset' })}
                    className={`${styles.button} ${styles.centered}`}
                >
                    Reset
                </button>
            </p>
        )
    }

    const onChangeCourse = (evt) => {
        setSelectedCourse(evt.target.value);
    }

    const onChangeCity = (evt) => {
        setSelectedCity(evt.target.value);
    }

    return (
        <>
            <h3 className="uppercase text-blue-400 text-center mb-12 md:mb-24">Inscrie-te la un curs</h3>

            {state.status === "ERROR" && (
                <p className={styles.error}>Something went wrong! Please try again</p>
            )}
            <form className={`${styles.form} ${state.status === "PENDING" && styles.pending}`} onSubmit={handleSubmit}>
                <div className="grid xl:flex md:justify-center xl:justify-around gap-10 xl:gap-0 mb-16 md:mb-32">
                    <select onChange={(evt) => onChangeCourse(evt)} value={selectedCourse} className="select">
                        <option value="" disabled hidden>Alege cursul</option>
                        {LISTA_CURSURI.length > 0 && LISTA_CURSURI.map((item, index) => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>
                    <select onChange={(evt) => onChangeCity(evt)} value={selectedCity} className="select">
                        <option value="" disabled hidden>Alege locatia</option>
                        {ORASE.length > 0 && ORASE.map((item, index) => {
                            return <option key={item.cityId} value={item.cityId}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className="bg-white p-8 md:p-16 mb-12 md:mb-24">
                    <p className="mb-5">Tipul : Specializare</p>
                    <p className="mb-10">Durata cursului: 6 saptamani</p>
                    <p className="text-blue-400">Pretul cursului este de 950 lei si se poate plati in 3 rate</p>
                </div>

                <div className="grid md:justify-center mb-12 md:mb-24 gap-6 md:gap-12">

                    <input className="input" type="text" name="name" placeholder="Nume si prenume" value={state.name} onChange={updateFieldValue('name')} />

                    <input className="input" type="email" name="email" placeholder="Email" value={state.email} onChange={updateFieldValue('email')} />

                    <input className="input" type="text" name="subject" placeholder="Subiect" value={state.subject} onChange={updateFieldValue('subject')} />

                    <textarea className="input" name="body" placeholder="Body" value={state.body} onChange={updateFieldValue('body')} />

                </div>

                <button className="btn btn-primary btn-big md:justify-self-center">Inscrie-te</button>

            </form>
        </>
    )
}

export default Form
