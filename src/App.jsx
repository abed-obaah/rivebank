import { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import './App.css'
import logo from "./assets/logoipsum-297.svg"
import logoSmall from "./assets/logoipsum-296.svg"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeatureSection from './components/FeatureSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <Header/>

      <main>
        {/* Hero section */}
       <HeroSection/>
        <FeatureSection/>

        {/* Testimonial section */}
       <Testimonials/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
