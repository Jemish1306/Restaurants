const ChangePassword = () => (
    <div>
      {/* Add content for Change Password */}
      <h2 className="text-lg font-semibold mb-4">Change Password</h2>
      <div className="flex flex-col mb-4">
        <label className="text-gray-400">Current Password</label>
        <input type="password" className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400" />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-400">New Password</label>
        <input type="password" className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400" />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-400">Confirm New Password</label>
        <input type="password" className="p-2 bg-accent text-white rounded-xl focus:border-cyan-400" />
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600">Change Password</button>
      </div>
    </div>
  );
  
  export default ChangePassword;
  