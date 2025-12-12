import {  Github, Instagram, Linkedin, MailSearchIcon } from "lucide-react"

const ConnectForm = () => {
  return (
   <section className="mt-1 py-8 px-4 bg-gradient-to-t from-gray-900 to-black rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold mb-6 flex gap-2 items-center justify-center text-white">
    Connect With Me <MailSearchIcon className="w-6 h-6" />
  </h2>

  <div className="flex flex-wrap justify-center gap-10">
    <form className="space-y-4 w-full sm:w-1/2 md:w-1/3 bg-gray-800 p-6 rounded-xl shadow-md">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="username"
          className="mt-1 block w-full border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone No.
        </label>
        <input
          type="text"
          id="phone"
          className="mt-1 block w-full border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>

    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center p-6 text-white">
      <p className="text-lg leading-relaxed italic text-gray-200">
        “Have a great idea in mind? Let’s connect and bring it to life together —
        transforming your vision into something truly remarkable.”
      </p>
      <p className="mt-3 text-sm text-gray-400">
        Whether it’s a web app, creative project, or a digital dream — I’d love to hear it.
      </p>
       <div className="mt-5">
                    <p className={` text-2xl`}>Connect </p>
                    <ul className="flex space-x-4 mt-2">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/shivakumar-h-p-927b621b4/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          <Linkedin />
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          <Github />
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600"
                        >
                          <Instagram />
                        </a>
                      </li>
                    </ul>
                  </div>
    </div>
  </div>
</section>

  )
}

export default ConnectForm