import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
    <>
     <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between bg-black text-white sm:px-20">
         <section className="text-lg">
            Copyright {year} || All rights reserved
         </section>

         <section className="flex items-center justify-center gap-5 text-2xl text-white">
            <a href="" className="hover:text-blue-500 transition-all ease-in-out duration-300">
                <BsFacebook/>
            </a>
            <a href="" className="hover:text-blue-500 transition-all ease-in-out duration-300">
                <BsLinkedin/>
            </a>
            <a href="" className="hover:text-pink-500 transition-all ease-in-out duration-300">
                <BsInstagram/>
            </a>
            <a href="" className="hover:text-green-500 transition-all ease-in-out duration-300">
                <BsGithub/>
            </a>
         </section>
      </footer>
    </>
  )
}