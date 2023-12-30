import Image from 'next/image'
import { Clients, Footer, Heroes, Pricing } from './components'

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
        <div className="flex flex-col items-center justify-center gap-y-8 md:justify-start text-center flex-1 px-6 pb-10">
          <Heroes/>
          <Clients/>
        </div>
        <Pricing/>
        <Footer/>
    </div>
  )
}
