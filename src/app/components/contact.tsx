import SmoothAnimatedSection from "./animation"
    
function Contact() {
  return (
    <SmoothAnimatedSection>
    
    <div className="grid sm:grid-cols-2 grid-cols-1 p-6  bg-gray-800 rounded-lg shadow-lg mt-14 mb-10" id="Contact">
      <div className="w-full max-w-md mt-[80px] text-center">
        <h1 className=" text-3xl mb-4 font-bold text-blue-500">
          Lets Get in Touch With US
        </h1>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente,
          tenetur ex aspernatur sed veritatis cupiditate, eveniet aliquam totam
          rerum. Ad, vitae omnis.
        </p>
        <div className="text-white  ">
                    <p className="mb-8"><strong>Phone Number:</strong> (123) 456-7890</p>
                    <p className="mb-8"><strong>Address:</strong> 123 Main St, Anytown, USA</p>
                    <p className="mb-8"><strong>Email:</strong> XYZcompany123@gmail.com</p>
                </div>

      </div>
      
      <div className="w-full max-w-md">
      <h1 className="text-white text-3xl mb-4 text-center">
          Contact <span className="text-blue-500">- Us</span>
        </h1>
        <form className="bg-gray-700 p-4 rounded-lg">
          <div className="mb-4">
            <label htmlFor="Name" className="text-white block mb-2">
              Name
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter Your Name"
              className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white block mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </SmoothAnimatedSection>
    
  );
}

export default Contact;
