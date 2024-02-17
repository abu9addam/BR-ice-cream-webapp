import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero(){
    return(
        <section className="hero mt-4">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">every thing is <br/>
            better with<br/>
            <span className="text-primary uppercase">
            ice-cream
            </span>
             </h1>
            <p className="my-6 text-gray-500 text-sm">You deserve a little treat.
 You also deserve that little treat delivered right to your door. Order your faves — 
 like scoops, sundaes, milkshakes and more – with your preferred delivery service.
  Hooray for more tasty yays throughout your day!
            </p>
            <div className="flex gap-4 text-sm ">
                <Link href={'/../menu'} className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2
                 rounded-full">
                    Order Now
                    <Right />
                    </Link>
                <Link href={'/#about'} className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                    Learn More
                    <Right />
                    </Link>
            </div>
            </div>
            <div className="relative">
            <Image src={'/Untitled.png'} width={'400'} height={'400'} alt="ice"></Image>
            </div>
        </section>
    );
}