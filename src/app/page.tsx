import Head from 'next/head';
import Navbar from './components/header';
import UserExperience from './components/userexperience';
import Cards from './components/cards';
import Contact from './components/contact';
import Footer from './components/footer';
import Quotes from './components/quotes';



const Home = () => {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/merakiui/dist/merakiui.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/alpinejs" defer></script>
      </Head>
      <Navbar/>
      <UserExperience/>
      
      <Quotes/>
      <Cards/>
      
      <Contact/>
      <Footer/>
      
      

     
    </div>
  );
};

export default Home;

