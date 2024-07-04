'use client'

import { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className={styles.contactForm}>
      <h2>Contacto</h2>
      {submitted && <p className={styles.success}>Mensaje enviado con éxito!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" value={form.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />

        <textarea
          name="message"
          placeholder="Write your message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Form
