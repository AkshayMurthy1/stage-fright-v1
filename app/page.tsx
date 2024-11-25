"use client"
// src/app/page.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

console.log(motion)

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/hero-background.jpg" // Replace with your hero image path
          alt="The Cure Hero Background"
          fill
          className="object-cover z-0"
        />
        <motion.div
          className="relative z-10 backdrop-blur-sm p-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest">
            The Cure
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Official site featuring news, tour dates, videos, and more.
          </p>
        </motion.div>
      </section>

      {/* Tour Section */}
      <motion.section
        className="py-20 px-8 md:px-16 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-center mb-12"
          variants={fadeInUp}
        >
          Upcoming Tours
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((tour) => (
            <motion.div
              key={tour}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold">City, Venue</h3>
              <p className="text-gray-400">Date: XX/XX/XXXX</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 underline"
              >
                Buy Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="py-20 px-8 md:px-16 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-center mb-12"
          variants={fadeInUp}
        >
          Latest News
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((news) => (
            <motion.div
              key={news}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold">News Title</h3>
              <p className="text-gray-400">
                A short description of the news article goes here.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} The Cure. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
