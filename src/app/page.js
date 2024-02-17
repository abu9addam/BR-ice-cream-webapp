
import Hero from "../components/layout/Hero";
import SectionHeaders from "../components/layout/SectionHeaders";
import HomeMenu from "../components/layout/HomeMenu";

export default function Home() {
  return (
    <>
    <Hero />
    <SectionHeaders />
    <HomeMenu />
    <section className="text-center my-16" id="about">
      
      <SectionHeaders 
      subHeader={'Our story'}
      mainHeader={'About us'} 
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
      <p>Some people think happiness is elusive.
That all you can do is sit back and hope it comes to you.

Well, they don’t see what we see.

Made your bed? That’s a reason to celebrate.
Put on pants with actual buttons?  There’s another.
Catch your kid’s smile coming off the bus today? Worth celebrating.
      </p>
      <p>
      See, happiness isn’t a lottery you win; it’s a choice you can make.
Even if the world hands you a million reasons to choose otherwise.
      </p>
      <p>
      So laugh it off over ice cream. Get a just-because cake.
Find your slice of happiness to celebrate.
      </p>
      </div>
    </section>
    <section className="text-center my-8" id="contact">
      <SectionHeaders 
      subHeader={'Dont\'t hestitate'}
      mainHeader={'Contact us'}
      />
      <div className="mt-8">
      <a className="text-4xl underline text-gray-500" href="tel:0797690525">
        079 769 0 525
      </a>
      </div>
    </section>
    </>
  )
}
