import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"

// template_7fyha1f
// service_c7h8wyf
// iuPaV6CMlO71YioNp

const Contact = () => {
  const fromref = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: null
    
  }) 
  const [loading, setloading] = useState(false);
  
  const hendleChange = (e) => {
    const { target } = e;
    const { name, value } = target
    setForm({...form , [name]: value})
  }
  const hendleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs.send('service_c7h8wyf', 'template_7fyha1f', { from_name: form.name, to_name: "Naman", from_email: form.email, to_email: 'naman13399@gmail.com', message: form.message, ContactNum: form.number }, 'iuPaV6CMlO71YioNp').then(() => {
      setloading(false)
      alert("Thank you. I will get back to you as soon as possible")
      setForm({
        name: '',
        email: '',
        number: null,
        message:'',
      })
    }, (error) => {
      setloading(false)
      console.log(error);
      alert('Something wenr wrong')
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-wrap flex-col-reverse flex  gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl   " 
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contect.</h3>
        <form
          ref={fromref}
          onSubmit={hendleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
              name="name"
              required
              value={form.name}
              onChange={hendleChange}
              placeholder="what's your name?"

              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email"
              required
              name="email"
              value={form.email}
              onChange={hendleChange}
              placeholder="what's your email?"

              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Contact Number</span>
            <input type="number"
              name="number"
              required
              min="1000000000"
              max="9999999999"
              value={form.number}
              onChange={hendleChange}
              placeholder="what's your contact number?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={hendleChange}
              placeholder="what do you want to say?"

              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit fontbold text-white shadow-md shadow-primary rounded-xl">
            {
              loading ? 'Sending...' : 'Send'
            }
          </button>
        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")