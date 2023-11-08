import BaseLayout from '../layouts/BaseLayout';
import Intro from '../components/Home/Intro';
import Navbar from '../components/Home/Navbar/Navbar';

export default function Home() {
  return (
    <BaseLayout>
      <Navbar />
      <Intro />
    </BaseLayout>
  );
}
