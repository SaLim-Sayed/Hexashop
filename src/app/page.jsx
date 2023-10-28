import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/images/hero.svg"

export default function Home() {
  return (
  <div className="container flex items-center mx-32  gap-64 ">
    <div className=" flex-1 flex flex-col gap-[50px]">
    <h1 className={styles.title}> your one-step e-commerce destination</h1>
    <p className=' text-2xl leading-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe sapiente optio magni repudiandae aspernatur facilis,</p>
    <button className=' p-2 cursor-pointer bg-[#FDBA74] text-black font-bold border-none rounded-lg w-32  uppercase'>shop now</button>
    </div>
    <div className="col">
      <Image src={Hero} alt="hexashop" height={500} width={400}  className=' object-contain'/>
    </div>
  </div>
  )
}
