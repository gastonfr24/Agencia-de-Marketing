import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import React, { useEffect } from "react"
import {Helmet} from "react-helmet-async"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom"
import axios from "axios"
import { PulseLoader } from "react-spinners"

import 'animate.css/animate.min.css';
import { MdSpeakerNotesOff } from "react-icons/md"
import { setAlert } from "redux/actions/alerts/alert"
import { connect } from "react-redux"
import Alert from "components/alerts/alert"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { FaHandshake } from "react-icons/fa"

function Contact({setAlert}) {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const [enabled, setEnabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    budget: '',
  })


  const {
    name,
email,
subject,
message,
phone,
budget
  } = formData

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    if(enabled){
      setLoading(true)
      const config ={
        header:{
          'Content-Type' : 'application/json'
        }
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('subject', subject)
      formData.append('message', message)
      formData.append('budget', budget)

      const fetchData = async() =>{
        try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, formData, config)
        
      if(res.status === 200){
        setLoading(false)
        setAlert('Se ha enviado el mail', 'text-green-500', CheckCircleIcon) 
         setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          budget: '',
        }) 
       
      }else{
        setLoading(false)
         setAlert('No se ha podido enviar el mail', 'text-rose-500', MdSpeakerNotesOff) 
        // setFormData({
        //   name: '',
        //   email: '',
        //   subject: '',
        //   message: '',
        //   phone: '',
        //   budget: '',
        // })
        alert('no se ha podido enviar')
      }
      }catch{
        setLoading(false)
        setAlert('No se ha podido enviar el mail', 'text-rose-500', MdSpeakerNotesOff) 
       // setFormData({
       //   name: '',
       //   email: '',
       //   subject: '',
       //   message: '',
       //   phone: '',
       //   budget: '',
       // })
      }
      }
      fetchData()
    }else{
      setAlert('Acepta los términos y políticas para continuar', 'text-blue-400', FaHandshake) 
    }
  }

  
  
  return (
    <Layout>
                  <Helmet>
      <title>Viperpy | Contacto</title>
      <meta
      name="description"
      content="Viperpy Agency, Diseño Web con Inteligencia Artificial"
    />
    <meta name="keywords" content="agencia de marketing, agencia de software, creacion de paginas web, creacion de inteligencia artificial" />
    <link rel="canonical" href="https://www.viperpy.com/" />
     <meta name="robots" content="all"/>
     <meta name="author" content="Viperpy" />
     <meta name="publisher" content="Viperpy" />
      </Helmet>
      <Navbar/>
      {/* Alerts */}
      {loading ?
      <div className="fixed left-0 bottom-4 z-10 w-72 animate__animated animate__bounceInUp">
      <div className=" mx-4 pb-0.5 bg-white rounded-lg drop-shadow-xl">
      <h1 className=" pt-2 px-10 -mb-3 text-orange-cus">Enviando email</h1>
      <div className=" loader-line"/>
      </div>
    </div>
      :
      <></>
      }

      <div className="pt-28">
      <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Email"
                  required
                />
              </div>

                <div>
                <label className="sr-only">
        Phone
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">+</span>
        </div>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={e=>onChange(e)}
          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="54 999 123 456"
          aria-describedby="price-currency"
        />

      </div>
    </div>

              <div>
                <label htmlFor="full-name" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={e=>onChange(e)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>


              <div>
                <label htmlFor="message" className="sr-only">
                  Budget
                </label>
                    <select name="budget" 
                    onChange={e=>onChange(e)}
                    value={budget}
                    className="mt-1 block w-full pl-3 pr-10 texte-base gorder border-gray-300"
                    ><option value="" disabled className="text-gray-200">Presupuesto (opcional)</option>
                      <option value="0-100,000">0-100,000 ARS</option>
                      <option value="100,000-250,000">100,000-250,000 ARS</option>
                      <option value="250,000+">250,000+ ARS</option>
                    </select>
              </div>

              <div>
              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="flex grid-cols-12 ml-4 mt-2">

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-orange-300' : 'bg-gray-200'}
        col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>

          <p className="m-2 ml-4 col-span-9 text-sm font-regular leading-6 text-gray-500">
          Aceptar los 
          <span className="text-indigo-500">
            <Link to='/terms'>  Términos de Servicios </Link>
                            y
            <Link to='/privacy'>  Políticas de Privacidad</Link>
               </span>
          </p>

        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          {
            loading  ? 
            <div
            className="relative inline-flex items-center rounded-md border border-transparent bg-orange-cus px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
          <span className='px-2 flex'>
             Enviando <div className="flex">
              <PulseLoader size={4} color="white" className="mt-2 ml-0.5" />
              </div>
            </span>
          </div>
          :
          <button
            type="submit"
            className="relative inline-flex items-center rounded-md border border-transparent bg-orange-cus px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-cus focus:ring-offset-2"
          >
            Enviar mail
          </button>
          }
        </div>
      </div>
    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Alert/>
      <Footer/>
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, {
  setAlert
})(Contact);
