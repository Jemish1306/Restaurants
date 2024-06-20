import { useState } from 'react';
import Layout from './../Shared/Layout';


import Profile from './../Shared/Profile';
import TermsAndConditions from './../Shared/TermAndConditions';
import ChangePassword from './../Shared/ChangePassword';

const ProfilePage2 = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'changePassword':
        return <ChangePassword />;
      case 'termsAndConditions':
        return <TermsAndConditions />;
      default:
        return <Profile />;
    }
  };

  return (
    <Layout>
      <section className="p-8 bg-mainbg rounded-lg text-white">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="bg-secondary shadow-2xl p-6 rounded-lg w-full lg:w-1/4 h-1/2 lg:h-full">
            <div className="text-yellow-500 text-lg font-semibold mb-4">Menu</div>
            <ul className="space-y-4">
              <li>
                <button
                  className={`py-2 px-4 bg-accent shadow-lg text-white font-semibold rounded-md w-full text-left hover:bg-yellow-500 ${
                    activeSection === 'profile' ? 'bg-yellow-500' : ''
                  }`}
                  onClick={() => setActiveSection('profile')}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  className={`py-2 px-4 bg-accent shadow-lg text-white font-semibold rounded-md w-full text-left hover:bg-yellow-500 ${
                    activeSection === 'changePassword' ? 'bg-yellow-500' : ''
                  }`}
                  onClick={() => setActiveSection('changePassword')}
                >
                  Change Password
                </button>
              </li>
              <li>
                <button
                  className={`py-2 px-4 bg-accent shadow-lg text-white font-semibold rounded-md w-full text-left hover:bg-yellow-500 ${
                    activeSection === 'termsAndConditions' ? 'bg-yellow-500' : ''
                  }`}
                  onClick={() => setActiveSection('termsAndConditions')}
                >
                  Terms & Condition
                </button>
              </li>
            </ul>
          </div>
          <div className="bg-secondary shadow-2xl p-6 rounded-lg w-full lg:w-3/4">
            {renderSection()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage2;
