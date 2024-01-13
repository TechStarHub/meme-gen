import BaseLayout from '../layouts/BaseLayout';
import Intro from '../components/Home/Intro';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <BaseLayout>
      <Navbar/>
      <Hero />
      {/* <Intro/> */}
      <Footer/>
    </BaseLayout>
  );
}
