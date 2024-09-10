
function ManageProducts() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">Product Name</h2>
          <p className="text-gray-600 mb-4">Product description goes here.</p>
          <div className="flex justify-between">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg flex items-center">
              <i className="fas fa-trash-alt mr-2"></i>
              Delete
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded-lg flex items-center">
              <i className="fas fa-edit mr-2"></i>
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-lg flex items-center">
              <i className="fas fa-gavel mr-2"></i>
              Bids
            </button>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  </div>
  )
}

export default ManageProducts