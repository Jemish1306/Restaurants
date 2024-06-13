import  { useState } from 'react';
import bg from '../assets/Img/restobg.jpg'
import { Link } from 'react-router-dom';

 const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'Male',
    age: '',
    address: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 text-white">Registration</h2>
        {['firstName', 'lastName', 'email', 'phone', 'age', 'address', 'password'].map((field) => (
          <div key={field} className="mb-4 ">
            <label className="block mb-1 text-white" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-900"
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block mb-1 text-white" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-900"
            required
          > 
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            I agree to the Terms and Conditions
          </label>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md">
          Register
        </button>
      </form>
    </div>





    <div className={'min-h-screen flex items-center justify-center'}>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl text-white mb-4'>Registration</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-white'>First Name</label>
            <input className='w-full p-2 mt-2 bg-gray-700 text-white rounded' type='text' name='firstName' />
          </div>
          <div className='mb-4'>
            <label className='block text-white'>Last Name</label>
            <input className='w-full p-2 mt-2 bg-gray-700 text-white rounded' type='text' name='lastName' />
          </div>
          <div className='mb-4'>
            <label className='block text-white'>Email</label>
            <input className='w-full p-2 mt-2 bg-gray-700 text-white rounded' type='email' name='email' />
          </div>
          <div className='mb-4'>
            <label className='block text-white'>Password</label>
            <input className='w-full p-2 mt-2 bg-gray-700 text-white rounded' type='password' name='password' />
          </div>
          <button type='submit' className='w-full bg-yellow-500 text-gray-800 p-2 rounded'>Register</button>
        </form>
      </div>
    </div>
    </>



  );
};

export default RegistrationForm;               







export function RegistrationForm1  () {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900  bg-transparent' style={{ backgroundImage: `url(${bg})`, opacity:.5 }}>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md  '>
        <h1 className='text-3xl text-white mb-6'>Registration</h1>
        <form>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-white mb-2'>First Name</label>
              <input className='w-full p-2 rounded' type='text' placeholder='Enter First Name' />
            </div>
            <div>
              <label className='block text-white mb-2'>Last Name</label>
              <input className='w-full p-2 rounded' type='text' placeholder='Enter Last Name' />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Email Address</label>
            <input className='w-full p-2 rounded' type='email' placeholder='Enter Email Address' />
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Phone Number</label>
            <input className='w-full p-2 rounded' type='tel' placeholder='Enter Phone Number' />
          </div>
          <div className='mb-4 grid grid-cols-3 gap-4'>
            <div>
              <label className='block text-white mb-2'>Country</label>
              <select className='w-full p-2 rounded'>
                <option>Select Country</option>
                {/* Add country options here */}
              </select>
            </div>
            <div>
              <label className='block text-white mb-2'>State</label>
              <select className='w-full p-2 rounded'>
                <option>Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <label className='block text-white mb-2'>City</label>
              <select className='w-full p-2 rounded'>
                <option>Select City</option>
                {/* Add city options here */}
              </select>
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Select Restaurant</label>
            <select className='w-full p-2 rounded'>
              <option>Select Restaurant</option>
              {/* Add restaurant options here */}
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Password</label>
            <input className='w-full p-2 rounded' type='password' placeholder='Enter Password' />
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Confirm Password</label>
            <input className='w-full p-2 rounded' type='password' placeholder='Enter Confirm Password' />
          </div>
          <div className='mb-4 flex items-center'>
            <input type='checkbox' className='mr-2' />
            <span className='text-white'>
              I Agree to all the{' '}
              <a href='#' className='text-blue-500 underline'>
                T&C
              </a>{' '}
              and{' '}
              <a href='#' className='text-blue-500 underline'>
                Privacy Policies
              </a>
              .
            </span>
          </div>
          <button className='w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition'>
            Register
          </button>
          <p className='mt-4 text-center text-white'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-500 underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}





export function  RegistrationForm2  ()  {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div 
        className="absolute inset-0 bg-center bg-cover blur" 
        style={{ backgroundImage: `url(${bg})`, filter: 'blur(4px) ' }}
      ></div>
      <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-80">
        <h1 className="text-3xl text-white mb-6">Registration</h1>
        <form>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">First Name</label>
              <input className="w-full p-2 rounded" type="text" placeholder="Enter First Name" />
            </div>
            <div>
              <label className="block text-white mb-2">Last Name</label>
              <input className="w-full p-2 rounded" type="text" placeholder="Enter Last Name" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Email Address</label>
            <input className="w-full p-2 rounded" type="email" placeholder="Enter Email Address" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Phone Number</label>
            <input className="w-full p-2 rounded" type="tel" placeholder="Enter Phone Number" />
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-white mb-2">Country</label>
              <select className="w-full p-2 rounded">
                <option>Select Country</option>
                {/* Add country options here */}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">State</label>
              <select className="w-full p-2 rounded">
                <option>Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">City</label>
              <select className="w-full p-2 rounded">
                <option>Select City</option>
                {/* Add city options here */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Select Restaurant</label>
            <select className="w-full p-2 rounded">
              <option>Select Restaurant</option>
              {/* Add restaurant options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input className="w-full p-2 rounded" type="password" placeholder="Enter Password" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Confirm Password</label>
            <input className="w-full p-2 rounded" type="password" placeholder="Enter Confirm Password" />
          </div>
          <div className="mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-white">
              I agree to all the <Link to="#" className="text-blue-500">T&C</Link> and <Link to="#" className="text-blue-500">Privacy Policies</Link>.
            </label>
          </div>
          <button className="w-full bg-yellow-500 text-gray-900 p-2 rounded">Register</button>
        </form>
        <p className="mt-4 text-white">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}










export function  RegistrationForm3  ()  {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ backgroundImage: `url(${bg})`, filter: 'blur(8px)', opacity: 0.5 }}
      ></div>
      <div className="relative flex items-center justify-center w-full  bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg ">
          <h1 className="text-3xl text-white mb-6">Registration</h1>
          <form>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">First Name</label>
                <input className="w-full p-2 rounded" type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input className="w-full p-2 rounded" type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email Address</label>
              <input className="w-full p-2 rounded" type="email" placeholder="Enter Email Address" />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Phone Number</label>
              <input className="w-full p-2 rounded" type="tel" placeholder="Enter Phone Number" />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div>
                <label className="block text-white mb-2">Country</label>
                <select className="w-full p-2 rounded">
                  <option>Select Country</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">State</label>
                <select className="w-full p-2 rounded">
                  <option>Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">City</label>
                <select className="w-full p-2 rounded">
                  <option>Select City</option>
                  {/* Add city options here */}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Select Restaurant</label>
              <select className="w-full p-2 rounded">
                <option>Select Restaurant</option>
                {/* Add restaurant options here */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Password</label>
              <input className="w-full p-2 rounded" type="password" placeholder="Enter Password" />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Confirm Password</label>
              <input className="w-full p-2 rounded" type="password" placeholder="Enter Confirm Password" />
            </div>
            <div className="mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-white">
                I agree to all the <Link to="#" className="text-blue-500">T&C</Link> and <Link to="#" className="text-blue-500">Privacy Policies</Link>.
              </label>
            </div>
            <button className="w-full bg-yellow-500 text-gray-900 p-2 rounded">Register</button>
          </form>
          <p className="mt-4 text-white">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center text-center text-white ml-8">
          <img src={bg} alt="Restaurants Logo" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold">Restaurants</h2>
          <p className="italic mb-4">Your Tagline</p>
          <p className="max-w-md">
            Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.
          </p>
        </div>
      </div>
    </div>
  );
}









export function RegistrationForm4() {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-gray-900 shadow-lg">
      {/* Background with blur and opacity */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-transparent"
        style={{ backgroundImage: `url(${bg})`,filter:'blur(5px)' }}
      ></div>

      {/* Flex container for the split layout */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center  bg-opacity-90 p-8 rounded-lg shadow-lg">
        {/* Left side for the form */}
        <div className="w-full max-w-2xl  rounded-md shadow-lg bg-slate-800 opacity-80">
          <h1 className="text-3xl text-white mb-6">Registration</h1>
          <form>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 m-8 ">
              <div>
                <label className="block text-white mb-2">First Name</label>
                <input className="w-full p-2 rounded" type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input className="w-full p-2 rounded" type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Email Address</label>
              <input className="w-full p-2 rounded" type="email" placeholder="Enter Email Address" />
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Phone Number</label>
              <input className="w-full p-2 rounded" type="tel" placeholder="Enter Phone Number" />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
              <div>
                <label className="block text-white mb-2">Country</label>
                <select className="w-full p-2 rounded">
                  <option>Select Country</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">State</label>
                <select className="w-full p-2 rounded">
                  <option>Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">City</label>
                <select className="w-full p-2 rounded">
                  <option>Select City</option>
                  {/* Add city options here */}
                </select>
              </div>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Select Restaurant</label>
              <select className="w-full p-2 rounded">
                <option>Select Restaurant</option>
                {/* Add restaurant options here */}
              </select>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Password</label>
              <input className="w-full p-2 rounded" type="password" placeholder="Enter Password" />
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Confirm Password</label>
              <input className="w-full p-2 rounded" type="password" placeholder="Enter Confirm Password" />
            </div>
            <div className="mb-4 m-8">
              <input type="checkbox" className="mr-2" />
              <label className="text-white">
                I agree to all the <Link to="#" className="text-blue-500">T&C</Link> and <Link to="#" className="text-blue-500">Privacy Policies</Link>.
              </label>
            </div>
            <button className="w-full bg-yellow-500 text-gray-900 p-2   rounded">Register</button>
          </form>
          <p className="mt-4 text-white m-8">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>

      {/* Right side for the logo and text */}
      <div className="relative hidden md:flex w-full md:w-1/2 flex-col items-center justify-center text-center text-white p-8 bg-opacity-50 rounded-r-lg">
        <div className='flex gap-4 items-center'>

        <img src={logo} alt="Restaurants Logo" className="w-24 h-24 mb-4" />
        <h2 className="text-2xl font-bold">Restaurants</h2>

        </div>
        <p className="italic mb-4">Your Tagline</p>
        <p className="max-w-md font-barlow">
          Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.
        </p>
      </div>
    </div>
  );
}
