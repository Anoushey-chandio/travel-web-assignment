
function Contact() {
  return (
    <main >
     
     <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100 p-4"> {/*  div for center */}
  <form id="contactForm" className="max-w-lg w-full p-6 bg-blue-50 shadow-md rounded-md">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Personal Information</h1>

    <input
      type="text"
      id="name"
      className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      required
      placeholder="Enter your name"
    />

    <input
      type="email"
      id="email"
      className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="email"
      required
      placeholder="Enter your email"
    />

    <h1 className="text-2xl font-bold mb-4 text-gray-800">Message</h1>

    <textarea
      id="message"
      className="w-full h-32 px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="message"
      placeholder="Your message"
    />

    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send Message
    </button>
  </form>
</div>

      


   


    </main>
    
  );
}
export default  Contact;