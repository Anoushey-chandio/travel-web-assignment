import Image from 'next/image';
import Link from 'next/link';
 function PopularTours() {
  return (
    <main>
   <section id="PopularTours" className="py-12 bg-blue-50 " >
    <h3 className="text-center text-3xl font-bold mb-6">Popular Tours</h3>
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
            <Image
                src="/images/pic13.jpg" // Public folder ka path
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
                src="/images/pic14.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
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
                src="/images/pic15.jpg" // Public folder ka path
                alt="A description of the image"
                width={500}
                height={300}
            />
            <div className="p-4 flex flex-col items-center">
                <h2 className="font-semibold text-xl">Travel Tour Mountain</h2>
                <p className="text-gray-600">Hiking in the mountain</p>
                <Link href="/contact">
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
    </main>
  );
}

export default PopularTours;