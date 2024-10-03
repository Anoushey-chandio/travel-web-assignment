import Image from 'next/image';
 function Feedback() {
    return (
      <main>
        <h1>website feedback</h1>
    
  
<section id="contact" className="py-12">
      <h1 className="text-center text-3xl font-bold mb-6">Client Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
                src="/images/f-b-two.jpg" // Public folder ka path
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
                src="/images/f-b3.jpg" // Public folder ka path
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
                src="/images/f-b1.jpg" // Public folder ka path
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
  
     
  
  
      </main>
      
    );
  }

  export default Feedback;