import Image from "next/image";
import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";
import React from 'react';
import styles from "../styles/layout.module.css";
export default function HomePage() {
  return (
    <div className="flex max-w-8xl mx-auto flex-col items-center justify-center py-2 min-h-screen bg-white">
      {/* <Header /> */}
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-10 bg-white">
      <div className="flex flex-col space-y-10 mt-4 mb-16">
      <h1 className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 pb-7 sm:px-4 px-2 border-gray-500 gap-2">
          <span className="relative whitespace-nowrap text-green-600 text-5xl text-shadow">
            <SquigglyLines />
            <span className="relative">JUST 3D</span>
          </span>{" "}
        </h1>
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black sm:text-7xl">
          Generating 3D objects for everyone
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture and generate your 3d object.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/"
        >
          Generate 3D object
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16 bg-gray-200 rounded-2xl">
            <div className="flex sm:space-x-10 sm:flex-row flex-col mt-20 mb-20 ml-20 mr-20">
<div className="sm:mt-20 mb-10">
              <div className={styles.container}>
                 
                <Image
                  alt="a static image"
                  src="/images/cats-dogs-breeds.jpg"
                  className="w-full object-cover h-64 rounded-2xl"
                  width={400}
                  height={400}
                />
                </div>
                <h3 className="mt-10 font-medium text-lg text-black bg-gray-100 rounded-xl"><b>A Static Image</b>
                <p>This is a static image, and we can detect objects in it and convert them into 3D objects.</p>
                <p>The generated 3D objects are shown on the right</p>
                </h3> 
                              
              </div>
              <div className={styles.dashedDiv}>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg text-black">cat in the middle</h3>
                <Image
                  alt="cat-in-the-middle.gif"
                  width={400}
                  height={400}
                  src="/images/cat-in-the-middle.gif"
                  className="w-full object-cover h-32 rounded-2xl sm:mt-0 mt-2"
                />
                </div>
                <h3 className="mb-2 font-medium text-lg text-black">dog in the middle</h3>
                <Image
                  alt="dog-in-the-middle.gif"
                  width={400}
                  height={400}
                  src="/images/dog-in-the-middle.gif"
                  className="w-full object-cover h-32 rounded-2xl sm:mt-0 mt-2"
                />
                <h3 className="mb-1 font-medium text-lg text-black">dog on the right</h3>
                <Image
                  alt="dog-on-the-right.gif"
                  width={400}
                  height={400}
                  src="/images/dog-on-the-right.gif"
                  className="w-full object-cover h-32 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
          </div>
        </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
