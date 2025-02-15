import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Testimonial from "../Components/Testimonial";

const Home = () => {
    return (
      <div>
        <section id="home">
        <Navbar />
        </section>
        <Banner></Banner>

        <section id="products" className="min-h-screen flex items-center justify-center bg-gray-100">
          <Product></Product>
          {/* Product Cards will go here */}
        </section>
  
        <section id="testimonials" className="min-h-screen flex items-center justify-center">
          <Testimonial></Testimonial>
        </section>
  
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
          <Contact></Contact>
        </section>

        <section>
            <Footer></Footer>
        </section>

      </div>
    );
  };
  
  export default Home;
  