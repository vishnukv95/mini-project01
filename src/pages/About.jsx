import React from 'react'

const About = () => {
  return (
    <div>

     <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white">
    

      <main className="flex-grow flex flex-col justify-center items-center p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4 text-green-600">About Byte.com</h1>
        <p className="max-w-3xl text-center mb-6">
          Byte.com is your go-to food ordering platform, making it easy and convenient to enjoy your favorite dishes from the comfort of your home. Whether you're craving South Indian delicacies, Indo-Chinese treats, or classic North Indian dishes, we've got you covered.
        </p>

        <p className="max-w-3xl text-center mb-4">
          Our mission is to connect food lovers with the best restaurants around them, offering a seamless ordering experience, fast delivery, and top-notch service. Byte.com is built with passion by foodies, for foodies.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="/" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Go to Home
          </a>
          <a href="/Contact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Contact Us
          </a>
        </div>
      </main>

    
    </div>
  

    </div>
  )
}

export default About