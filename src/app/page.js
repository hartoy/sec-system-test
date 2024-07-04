import Header from '../components/header/Header'
import About from '../components/about/About'
import Interests from '../components/interests/Interests'
import ContactForm from '../components/form/Form'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  )
}
