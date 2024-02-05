const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-col items-center">
    <div className="flex items-center mb-4">
          <h2 className="text-3xl font-semibold">In<span className='text-[#E8C025] italic'>Bev</span> </h2>
    </div>
    
    <div className="flex space-x-4">
      <a href="/" className="hover:text-gray-500">Home</a>
      <a href="about" className="hover:text-gray-500">About Us</a>
      <a href="/products" className="hover:text-gray-500">Products</a>
      {/* <a href="/" className="hover:text-gray-500">Contact</a> */}
    </div>

    <div className="mt-4 flex items-center space-x-4">
      <span>&copy; 2024 AB-In-Bev. All rights reserved.</span>
      {/* <div className="flex items-center space-x-2">
        <a href="#" className="text-white hover:text-gray-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M19.001 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14zM8 8a3 3 0 0 1 6 0v1a3 3 0 0 1-6 0V8zm0 4a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1zm10 0a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1z"
            ></path>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M19 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14zM15 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            ></path>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0V3zM7 3a1 1 0 0 1 2 0v18.184l5.89-3.394a1 1 0 0 1 1.02-.016l5.967 3.206A1 1 0 0 1 22 21V3a1 1 0 0 1-1.293-.117l-6-3a1 1 0 0 1-.703 0l-6 3A1 1 0 0 1 7 3z"
            ></path>
          </svg>
        </a>
      </div> */}
    </div>
  </div>
</footer>

    )
}
export default Footer;