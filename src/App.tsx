/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-cyan selection:text-navy relative z-0">
      {/* White and Black Background Pattern */}
      <div className="fixed inset-0 z-[-1] bg-navy">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-white opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-white opacity-5 blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <About />
        <Process />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
