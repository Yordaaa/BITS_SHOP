import Product from "../components/Product";

function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div
        className="lg:h-fit pb-20 bg-center max-w-screen-2xl mx-auto max-h-fit"
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-electronic-technology-flat-simple-poster-banner-image_165770.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="pt-20 pb-5">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl pb-3 text-gray-700 text-center use ">
            WELCOME TO OUR SHOP
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl  text-gray-700 text-center use pb-5">
            Find Your Needs Here
          </div>
          <div className="mx-10">
            <div className="relative w-full max-w-screen-md mx-auto">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i className="fas fa-search"></i>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50  "
                placeholder="Enter keyword"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2 bg-primary hover:opacity-90 font-medium rounded-3xl text-sm px-4 py-1 "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-10">
        <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto">
          Latest Posts
        </h1>
        <Product />
      </div>
      <div className="flex space-x-4">
  <div className="flex items-center">
    <i className="fas fa-exchange-alt"></i> {/* Peer-to-Peer Sale */}
    <span className="ml-2">Peer-to-Peer Sale</span>
  </div>
  <div className="flex items-center">
    <i className="fas fa-hand-holding"></i> {/* Lending */}
    <span className="ml-2">Lending a Product</span>
  </div>
  <div className="flex items-center">
    <i className="fas fa-laptop"></i> {/* Renting */}
    <span className="ml-2">Renting</span>
  </div>
</div>
    </div>
  );
}

export default Home;
