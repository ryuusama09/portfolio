import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Blogs,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="absolute inset-0 -z-10 flex min-h-[100dvh] flex-col  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
        <Header loader={true} />
        <main className="flex-1 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Blogs />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </main>
      </div>
      <Cursor />
    </>
  );
}
