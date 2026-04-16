import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-light pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <img 
                src="https://res.cloudinary.com/drufv7gh5/image/upload/v1776279867/Gemini_Generated_Image_so26r5so26r5so26-modified_s2cxop.png" 
                alt="NexTechZen Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-heading font-bold text-xl tracking-wide">
                NexTech<span className="text-white">Zen</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Zen in Technology – Crafting Digital Excellence. We build premium digital experiences that drive real business growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Portfolio', 'Our Process', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-cyan transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/50"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Web Development',
                'E-commerce Platforms',
                'SaaS Applications',
                'UI/UX Design',
                'SEO & Marketing',
                'Maintenance & Support'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-cyan transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/50"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest insights from the Zen Lab.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan/50 transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan hover:text-navy rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 NexTechZen. All Rights Reserved. Made with passion in Chittagong, Bangladesh.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
