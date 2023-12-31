export default function Home() {
  
    return (
      <>
      <body className="bg-white">
        <div className="pt-8 flex items-center justify-center">
            <img className="w-16 sm:w-36 2xl:w-96" src="logo.png" alt="Logo"/>
        </div>
        <div className="flex flex-col items-center justify-center pt-12 lg:px-96">
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-12 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-gray-800 hover:bg-gray-700 rounded-full"> 
            <a className="text-white font-bold lg:text-2xl 2xl:text-5xl" href="/HomeP">
              Photography
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-gray-800 hover:bg-gray-700 rounded-full">
            <a className="text-white font-bold lg:text-2xl 2xl:text-5xl" href="/HomeC">
              Code
            </a>
          </div>
  
          <div className="flex justify-center items-center m-2 w-56 lg:w-80 2xl:m-14 2xl:w-full h-12 lg:h-16 2xl:h-24 bg-gray-800 hover:bg-gray-700 rounded-full">
            <a className="text-white font-bold  lg:text-2xl 2xl:text-5xl" href="/HomeD"> 
              Design 
            </a>
          </div>
        </div>
      </body>
    </>
    )
  }