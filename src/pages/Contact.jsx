import React from 'react'

const Contact = () => {
  return (
     <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white">
      

      <main className="flex-grow flex flex-col justify-center items-center p-6 mt-20">
        <h1 className="text-4xl font-bold mb-6 text-green-600">Contact Us</h1>

        <p className="text-center mb-8 max-w-xl">
          Have a question, suggestion, or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="w-full max-w-lg bg-white dark:bg-zinc-700 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 rounded border focus:outline-green-500 dark:bg-zinc-600"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 rounded border focus:outline-green-500 dark:bg-zinc-600"
              type="email"
              id="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 rounded border focus:outline-green-500 dark:bg-zinc-600"
              id="message"
              rows="4"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      
    </div>
  )
}

export default Contact