const Profile = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-16 h-16" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Jenny Wilson</span>
            <span className="text-gray-400">Statesman Restaurant</span>
          </div>
        </div>
        <button className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-yellow-500">Edit Profile</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add the input fields as in your current code */}
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600">Save</button>
      </div>
    </div>




  );
  
  export default Profile;
  