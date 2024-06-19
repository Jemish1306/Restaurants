 const Navbar =()=>{

    return(
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-gray-400">Jd's Restro</p>
        </div>
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search Here Your Delicious Food..." 
            className="p-2 rounded bg-gray-700 text-white"
          />
          <div className="flex items-center ml-4">
            <span>Musabbir Hossain</span>
            <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-8 h-8 ml-2" />
          </div>
        </div>
      </header>

    )
 }
 export default Navbar