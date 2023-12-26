export default function App() {
  return (
    <body className="min-h-screen">
      <div class="pt-12 flex items-center justify-center">
        <img className="w-32 h-28" src="logo.png" alt="Logo"></img>
        </div>

        <nav>
          <div className="pt-36 flex flex-row ">
            <button className="h-screen basis-1/2 box-border text-2xl bg-gradient-to-r from-purple-500 to-pink-500">
              Photography
            </button>
            <button className="basis-1/2 box-border text-2xl bg-gradient-to-r from-pink-500 to-purple-500 ">
              Code
            </button>

          </div>

        </nav>
    </body>

  )
}