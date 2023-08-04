import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

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
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg text-black">a static picture</h3>
                <Image
                  alt="a static picture"
                  src="/images/bull.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg text-black">3d object</h3>
                <Image
                  alt="3d object"
                  width={400}
                  height={400}
                  src="/images/bull.gif"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
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
