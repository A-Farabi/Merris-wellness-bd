import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import DeliverySystem from "../Components/DeliverySystem";
import FAQ from "../Components/FAQ";
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

        <section className="container mx-auto mt-10">
          <DeliverySystem></DeliverySystem>
        </section>
  
        <section id="testimonials" className="container mx-auto flex items-center justify-center my-10">
          <Testimonial></Testimonial>
        </section>
  
        <section id="contact" className="container mx-auto flex items-center justify-center bg-gray-100 py-10">
          <Contact></Contact>
        </section>

        <section className="container mx-auto mt-10">
          <FAQ></FAQ>
        </section>

        <section className="mt-10">
            <Footer></Footer>
        </section>

      </div>
    );
  };
  
  export default Home;
  