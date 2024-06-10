import React from 'react'

const ForgetPassword = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Forgot password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Enter email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />

            
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Get OTP
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ForgetPassword