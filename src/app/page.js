import Image from 'next/image'
import styles from './page.module.css'
import BTNicon from "../../public/button-icon.svg";
import Navbar from "./components/Navbar";



function onToggleMenu(e){
  console.log(e.name)
}


export default function Home() {

  return (
    <>
      <main>
        <div className="">
          <Navbar/>
          
          

        </div>
        <hr className="border-[#323232]"></hr>
        <div className="bg-[#090909] w-full">
          <div className="py-48 mx-auto max-w-3xl flex flex-col items-center">
            <h1 className="sm:text-6xl text-5xl text-white text-center font-mori1 leading-tight">Building Beautiful and Intuitive Frontends for the Decentralized Future</h1>
            <p className="text-[#848484] max-w-sm text-center font-mori2 text-lg pt-5">We design and build beautiful brands, websites and products for startups and tech companies.</p>
            <span className="flex sm:flex-row flex-col pt-5 gap-8 ">
              <a href="#" className="inline-block animate-border rounded-xl from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r cursor-pointer">
                <span className="font-mori2 text-xl text-white flex items-center gap-2.5 py-4 px-5 rounded-xl bg-[#090909]">
                  See our Work
                  <Image src={BTNicon} alt="button icon"/>
                </span>
              </a>
              <a href="#">
                <span className="font-mori2 text-xl text-white flex items-center gap-2.5 py-4 px-5 rounded-xl border cursor-pointer">
                  Get in touch
                  <Image src={BTNicon} alt="button icon"/>
                </span>
              </a>
            </span>
          </div>
          <hr className="border-[#323232]"></hr>
    
        </div>
        
      </main>
    </>
  )
}
