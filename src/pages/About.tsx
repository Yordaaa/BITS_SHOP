import about from '/about.png';
function About() {
    return (
        <>
            <div
                className="grid max-w-screen-2xl md:grid-cols-3 justify-center px-4 py-8 mx-auto bg-cover bg-center lg:pr-20"
                style={{
                    backgroundImage:
                        "url('https://www.knoxalliance.store/wp-content/uploads/2017/05/light-color-background-images-for-website-top-hd-images-for-free-background-for-website-in-light-color-1-1024x640.jpg')"
                }}
            >
                <div className="mr-auto place-self-center md:col-span-2 md:px-20 lg:ml-16">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-center ">
                        <span className="text-primary font-bold">Who</span> We Are
                    </h1>
                    <p className="mb-6 text-gray-800 text-lg md:text-xl ">
                        We are a student-focused ecommerce platform designed to facilitate peer-to-peer buying and selling, as well as provide lending services and product offerings from our college.
                        Our mission is to create a convenient and accessible marketplace that caters specifically to the needs of our student community.
                    </p>
                </div>
                <div className="w-full flex justify-center mx-auto">
                    <img src={about} alt="About Us" className="h-96" />
                </div>
            </div>
            <section className="bg-gray-50 py-12 max-w-screen-2xl mx-auto ">
                <div className="container mx-auto px-10  max-w-screen-xl">
                    <h2 className="text-4xl font-bold mb-8 ">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-dollar-sign text-primary text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Affordability</h3>
                            <p>We make essential items accessible to all students.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-user-friends text-[#E3A57F] text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p>We bring students together and support one another.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-recycle text-primary text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p>We encourage reusing and recycling to reduce waste.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-shopping-bag text-[#E3A57F] text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Convenience</h3>
                            <p>Our platform makes buying, selling, and borrowing easy.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12">
                <div className="max-w-screen-lg mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
                    <div className=" p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 text-xl leading-relaxed">
                            We started this platform because we know students often have trouble finding affordable textbooks, school supplies, and other important things they need. We thought, why
                            not create an online store just for our college, where students can buy and sell directly to each other? This way, things will be cheaper and we can reuse more stuff.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
