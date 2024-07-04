'use client'
import React, { useState, useEffect } from 'react'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './Form.module.css'

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .matches(/^[A-Za-z\s]+$/, 'Only letters allowed for the name')
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().trim().min(5, 'Message must contain at least 5 characters').required('Message is required'),
  })

  const [send, setSend] = useState(false)

  useEffect(() => {
    console.log('send', send)
  }, [send])

  return (
    <section id="contact" className={styles.contactForm}>
      <h2>Contacto</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log('Formulario enviado', values)
            setSend(true)
            setSubmitting(false)
            resetForm()
          }, 400)

          setTimeout(() => {
            setSend(false)
          }, 10000)
        }}
      >
        {({ isSubmitting, isValid, touched, errors }) => (
          <FormikForm className={send ? `${styles.form} ${styles.successBg}` : styles.form}>
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Enter name"
                className={`${styles.input} ${touched.name && !errors.name ? styles.touched : ''}`}
              />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className={`${styles.input} ${touched.email && !errors.email ? styles.touched : ''}`}
              />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Write your message"
                className={`${styles.input} ${touched.message && !errors.message ? styles.touched : ''}`}
              />
              <ErrorMessage name="message" component="div" className={styles.error} />
            </div>

            {!send && (
              <button type="submit" disabled={isSubmitting || !isValid}>
                Enviar
              </button>
            )}

            {send && <p className={styles.success}>Message sent ✔️</p>}
          </FormikForm>
        )}
      </Formik>
    </section>
  )
}

export default Form
