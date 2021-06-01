import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup';
import { AppContext } from '../../context/app-context';
import Enums from '../../enums/Enums';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Campul este obligatoriu'),
    lastName: Yup.string().required('Campul este obligatoriu'),
    email: Yup.string().email('Adresa de mail este invalida'),
    phone: Yup.number().required('Numarul de telefon este obligatoriu'),
    course: Yup.string().required('Selecteaza un curs'),
    location: Yup.string().required('Selecteaza o locatie')
});

const Formular = ({ location }) => {
    const { ORASE, LISTA_CURSURI } = Enums;
    const { selectedCourse } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: selectedCourse,
        location: ''
    })

    useEffect(() => {
        setInitialValues(prevState => ({
            ...prevState,
            course: selectedCourse
        }))
    }, [selectedCourse])

    useEffect(() => {
        if(location.state.selected) {
            setInitialValues(prevState => ({
                ...prevState,
                course: location.state.selected
            }))
        }
    }, [location])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values, { setSubmitting }) => {
                let coursePretty = LISTA_CURSURI.find(curs => curs.id === +values.course).name;
                let locationPretty = ORASE.find(oras => oras.cityId === +values.location).name;
                let message = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    body: `Nume: ${values.lastName}\n Prenume: ${values.firstName}\n Email: ${values.email} \n Telefon: ${values.phone} \n Curs: ${coursePretty}\n Locatie: ${locationPretty}`
                }
                // fetch('/api/contact', {
                //     method: 'POST',
                //     body: JSON.stringify(message)
                // })
                //     .then(response => response.json())
                //     .then(response => {
                //         console.log(response);
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     })
                // setSubmitting(false)
            }}
        >
            {({ isSubmitting, values, setFieldValue }) => (
                <Form className="grid">
                    <h3 className="uppercase text-blue-400 text-center mb-12 md:mb-24">Inscrie-te la un curs</h3>

                    <div className="grid xl:flex md:justify-center xl:justify-around gap-10 xl:gap-0 mb-16">
                        <div>

                            <Field className="select" as="select" name="course">
                                <option value="" disabled hidden>Alege cursul</option>
                                {LISTA_CURSURI.length > 0 && LISTA_CURSURI.map((item, index) => {
                                    return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                            </Field>
                            <ErrorMessage className="text-red caption ml-5" name="course" component="div" />
                        </div>

                        <div>

                            <Field className="select" as="select" name="location">
                                <option value="" disabled hidden>Alege locatia</option>
                                {ORASE.length > 0 && ORASE.map((item, index) => {
                                    return <option key={item.cityId} value={item.cityId}>{item.name}</option>
                                })}
                            </Field>
                            <ErrorMessage className="text-red caption ml-5" name="location" component="div" />
                        </div>
                    </div>

                    {values.course &&
                        <div className="bg-white p-8 md:p-16 mb-12 md:mb-24">
                            <p className="mb-5">Tipul : Specializare</p>
                            <p className="mb-10">Durata cursului: 6 saptamani</p>
                            <p className="text-blue-400">Pretul cursului este de 950 lei si se poate plati in 3 rate</p>
                        </div>
                    }

                    <div className="grid md:justify-center mb-12 md:mb-24 gap-6 md:gap-12">

                        <div>
                            <Field className="input" placeholder="Nume" name="lastName" />
                            <ErrorMessage className="text-red caption ml-5" name="lastName" component="div" />
                        </div>

                        <div>
                            <Field className="input" placeholder="Prenume" name="firstName" />
                            <ErrorMessage className="text-red caption ml-5" name="firstName" component="div" />
                        </div>

                        <div>
                            <Field className="input" placeholder="Adresa de email" type="email" name="email" />
                            <ErrorMessage className="text-red caption ml-5" name="email" component="div" />
                        </div>

                        <div>
                            <Field className="input" placeholder="Numar de telefon" name="phone" />
                            <ErrorMessage className="text-red caption ml-5" name="phone" component="div" />
                        </div>
                    </div>

                    <button className="btn btn-primary btn-big md:justify-self-center" type="submit" disabled={isSubmitting}>Inscrie-te</button>
                </Form>
            )}
        </Formik>
    )
}

export default Formular
