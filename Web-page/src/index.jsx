export default function App() {
  return (
    <>
    <body className="bg-white">
      <div className="pt-8 flex items-center justify-center">
          <img className="w-16 sm:w-40 2xl:w-96" src="logo.png" alt="Logo"/>
      </div>
      <div className="flex flex-col items-center justify-center pt-12 lg:px-88">

        <div className="flex justify-center items-center m-3 w-56 lg:w-full h-12 lg:h-28 bg-gray-900 hover:bg-gray-800 rounded-full"> 
          <a className="text-white font-bold text-xl lg:text-5xl">
            Photography
          </a>
        </div>

        <div className="flex justify-center items-center m-3 w-56 lg:w-full h-12 lg:h-28 bg-gray-900 hover:bg-gray-800 rounded-full">
          <a className="text-white font-bold text-xl lg:text-5xl">
            Code
          </a>
        </div>

        <div className="flex justify-center items-center m-3 w-56 lg:w-full h-12 lg:h-28 bg-gray-900 hover:bg-gray-800 rounded-full">
          <a className="text-white font-bold text-xl lg:text-5xl"> 
            Design 
          </a>
        </div>

      </div>
      </body>
    </>
  )
}