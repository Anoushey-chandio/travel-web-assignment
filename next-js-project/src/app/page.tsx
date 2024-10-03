
import Link from "next/link";

import Image from 'next/image';
 function Home() {
  return (
    <main className="pt-16">
    
      {/*-------------------- --------------home section--------------- ---------------------------*/}
      <section className="text-gray-600 body-font bg-blue-50">
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Travel around the world
      <br /> 
    </h1>
    <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer id imperdiet augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
       posuere cubilia curae; Vestibulum quis ullamcorper mauris. Maecenas maximus viverra magna.
      </p>
    <div className="flex justify-center">
    <Link href="/about">

    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
      Discove Now
    </button>

</Link>

    
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 box-decoration-clone hover:box-decoration-slice ">
  <Image 
        src="/images/first-p.jpg" 
        alt="A description of the image"
        width={600}
        height={500}
        className="rounded-full w-700 h-600 object-cover"
      />      
  </div>
</div>
</section>
    {/*-------------------- --------------about (popular tours) section--------------- ---------------------------*/}
<section id="PopularTours" className="py-12 bg-slate-50" >
    <h3 className="text-center text-3xl font-bold mb-6">Popular Tours</h3>
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
            <Image
                src="/images/pic13.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
            <div className="p-4 flex flex-col items-center">
                <h2 className="font-semibold text-xl">Travel Tour Ocean</h2>
                <p className="text-gray-600">Hiking in the ocean</p>
                <Link href="/contact">

<button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
Book Now
</button>
</Link>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
            <Image
                src="/images/pic14.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
            <br/>    <br/>
            <div className="p-4 flex flex-col items-center">
                <h2 className="font-semibold text-xl">Travel Tour Forest</h2>
                <p className="text-gray-600">Hiking in the forest</p>
                <Link href="/contact">
<button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
  Book Now
</button>
</Link>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
            <Image
                src="/images/pic15.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
            <div className="p-4 flex flex-col items-center">
                <h2 className="font-semibold text-xl">Travel Tour Mountain</h2>
                <p className="text-gray-600">Hiking in the mountain</p>
                <Link href="/about">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
      Book Now
    </button>
</Link>
            </div>
        </div>
    </main>
    <div className="text-center mt-8">
    <Link href="/destination">
<button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
  Explore More
</button>
</Link>
    </div>
</section>


<section  className="py-12 bg-white-100">
    <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Destinations</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic1.jpeg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
          
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic2.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
        
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic-th3.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
            
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100"> 
        <Image
                src="/images/pic4.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
           
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic12.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
           
          
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic11.jpeg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
          
           
        </div>
    </div>
</section>

    {/*-------------------- --------------client feedback  section--------------- ---------------------------*/}
<section  className="py-12 bg-blue-50">
      <h1 className="text-center text-3xl font-bold mb-6">Client Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
                src="/images/f-b-two.jpg"
                alt="A description of the image"
                width={500}
                height={300}
            />
          <div className="p-4">
            <h2 className="font-semibold text-xl">Jennifer Rose</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          
               sit amet placerat ex dui non est</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
                src="/images/f-b3.jpg" 
                alt="A description of the image"
                width={500}
                height={300}
            />
          <div className="p-4">
            <h2 className="font-semibold text-xl">Sam Brown</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            ,
               sit amet placerat ex dui non est</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
                src="/images/f-b1.jpg"
                alt="A description of the image"
                width={500}
                height={300}
            />
          <div className="p-4">
            <h2 className="font-semibold text-xl">Sophia Johnson</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    
               sit amet placerat ex dui non est</p>
          </div>
        </div>
      </div>
    </section>
    {/*-------------------- --------------contact us section--------------- ---------------------------*/}
<section>
<h1 className="text-center text-3xl font-bold mb-6">Contact us</h1>
<form id="contactForm" className="max-w-lg mx-auto p-6 bg-blue-50 shadow-md rounded-md">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">contact us</h1>

  <input
    type="text"
    id="name"
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    name="name"
    required
    placeholder="Enter your name"
  />
  <br />

  <input
    type="email"
    id="email"
    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    name="email"
    required
    placeholder="Enter your email"
  />
  <br />

  <h1 className="text-2xl font-bold mb-4 text-gray-800">Message</h1>

  <textarea
    id="message"
    className="w-full h-32 px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    name="message"
    placeholder="Your message"
  />
  <br />

  <button
    type="submit"
    className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Send Message
  </button>
</form>
</section>
    {/*-------------------- --------------footer section--------------- ---------------------------*/}
<section className="bg-gray-800 text-white py-1 ">
  <footer>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="footer-section">
        <h4 className="text-xl font-semibold mb-2">
          ✈️ FlyHigh
        </h4>
        <p id="travel" className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Justo ac libero urna blandit libero tempor.
          . Sed egestas risus nunc cursus ultricies viverra.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">About us</h4>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Offers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Tour</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Management</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="text-xl font-semibold mb-2">Blogs</h4>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Tickets</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Booked</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Remain</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="text-xl font-semibold mb-2">Company</h4>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Location</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Travel</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400">Employees</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <div className="text-center mt-10">
    <h1 id="more-h1" className="text-2xl font-bold">Thank You</h1>
    <p id="copy-r" className="text-gray-400">&copy; 2024 Our Website. All Rights Reserved.</p>
  </div>
</section>


    </main>


  );
}


export default Home;