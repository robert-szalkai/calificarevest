import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup';
import { AppContext } from '../../context/app-context';
import Enums from '../../enums/Enums';
import { Link } from 'gatsby';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Campul este obligatoriu'),
    lastName: Yup.string().required('Campul este obligatoriu'),
    email: Yup.string().email('Adresa de mail este invalida'),
    phone: Yup.number().required('Numarul de telefon este obligatoriu'),
    course: Yup.string().required('Selecteaza un curs'),
    location: Yup.string().required('Selecteaza o locatie')
});

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const Formular = ({ location, cursuri }) => {
    const { ORASE, LISTA_CURSURI } = Enums;
    const { selectedCourse } = useContext(AppContext);

    const [courseDetails, setCourseDetails] = useState({});

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
        if (location.state?.selected) {
            setInitialValues(prevState => ({
                ...prevState,
                course: location.state.selected
            }))
        }
    }, [location])

    const onChangeCourse = (evt, setFieldValue) => {
        setFieldValue("course", evt.target.value);
        let curs = cursuri.find(curs => curs.id === evt.target.value);
        setCourseDetails({
            type: curs.type,
            code: curs.code,
            duration: curs.duration,
            conditions: curs.condition,
            price: curs.price,
            url: curs.short
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values, { setSubmitting }) => {
                let coursePretty = cursuri.find(curs => curs.id === +values.course).name;
                let locationPretty = ORASE.find(oras => oras.cityId === +values.location).name;
                let message = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    course: coursePretty,
                    location: locationPretty,
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
                <Form className="grid" name="inscriere" data-netlify="true" netlify-honeypot="true" data-netlify-recaptcha="true">
                    <div data-netlify-recaptcha={true}></div>
                    <p className="hidden">
                        <input name="bot-field" />
                    </p>
                    <h3 className="uppercase text-blue-400 text-center mb-12 md:mb-24">Inscrie-te la un curs</h3>

                    <div className="grid xl:flex md:justify-center xl:justify-around gap-10 xl:gap-0 mb-16">
                        <div>

                            <Field className="select" as="select" name="course" onChange={(evt) => onChangeCourse(evt, setFieldValue)}>
                                <option value="" disabled hidden>Alege cursul</option>
                                {cursuri.length > 0 && cursuri.map((item, index) => {
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
                        <div className=" grid bg-white p-8 md:p-16 mb-12 md:mb-24">
                            <div className="flex mb-3">
                                <span className="mr-2 p opacity-50">Tipul cursului:</span>
                                <span className="p semibold">{courseDetails.type}</span>
                            </div>
                            <div className="flex mb-3">
                                <span className="mr-2 p opacity-50">Cod NC:</span>
                                <span className="p semibold">{courseDetails.code}</span>
                            </div>
                            <div className="flex mb-3">
                                <span className="mr-2 p opacity-50">Durata cursului:</span>
                                <span className="p semibold">{courseDetails.duration}</span>
                            </div>
                            <div className="flex mb-3">
                                <span className="mr-2 p opacity-50">Conditii inscriere:</span>
                                <span className="p semibold">{courseDetails.conditions}</span>
                            </div>
                            <div className="flex mb-6">
                                <span className="mr-2 p opacity-50">Tarif:</span>
                                <span className="p semibold">{courseDetails.price}</span>
                            </div>
                            <Link className="btn btn-secondary btn-small justify-self-center"
                                to={`/cursuri/curs-${courseDetails.url}`}
                            >
                                Mai multe detalii
                            </Link>
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
