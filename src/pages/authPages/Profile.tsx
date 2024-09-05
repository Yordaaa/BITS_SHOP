import SideNav from "../../components/SideNav";
import avatar from "/avatar.png";
function Profile() {
  return (
    <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
      <div className="col-span-1 h-full">
        <SideNav />
      </div>
      <div className="px-4 mx-auto w-full max-w-xl col-span-3">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
            Edit your profile
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div className="w-full p-4 text-center bg-white max-w-screen-sm mx-auto mt-5">
              <div className="flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] rounded-full bg-green-500 overflow-hidden justify-center items-center cursor-pointer">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="absolute h-full w-full object-cover"
                  />
                  <div className="flex h-8 w-full bottom-0 bg-[rgb(0,0,0,0.5)] absolute items-center justify-center">
                    <i className="fas fa-camera text-2xl absolute text-white"></i>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="relative h-full w-full top-0 left-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="schoolId"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                School ID
              </label>
              <input
                type="text"
                name="schoolId"
                id="schoolId"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
