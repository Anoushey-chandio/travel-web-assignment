import Image from 'next/image';
 function Destination() {
    return (
      <main>
        <h1>website destination</h1>
        <section  className="py-12 bg-white-100">
    <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Destinations</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic1.jpeg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
          
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic2.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
        
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic-th3.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
            
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100"> 
        <Image
                src="/images/pic4.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
           
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic12.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
           
          
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-slate-100">
        <Image
                src="/images/pic11.jpeg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
          
           
        </div>
    </div>
</section>

  
  
     
  
  
      </main>
      
    );
  }

  export default Destination;