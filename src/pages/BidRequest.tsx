function BidRequest() {
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
        Place Your Bid
      </h1>
      <form className="space-y-4 ">
        <label className="block  text-xl font-bold text-gray-700">
          <span className="text-sm">Product ID : </span> #363247
        </label>
        <label className="block font-semibold text-gray-700">
          <span className="text-sm">Product owner ID : </span> 4321
        </label>

        <label className="block  font-semibold text-gray-700">
          <span className="text-sm">Bidder ID : </span> 1234
        </label>
        <label className="block font-semibold text-gray-700">
          <span className="text-sm">Bidder name : </span> Yerosen
        </label>

        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Bid Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Bid Amount"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message (Optional)
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter a message (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center"
        >
          Submit Bid
        </button>
      </form>
    </div>
  );
}

export default BidRequest;
