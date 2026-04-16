import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-navy">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover opacity-100 grayscale"
        >
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/80 to-navy z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] z-10"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Transform Your Vision Into <br className="hidden lg:block" />
            <span className="text-gradient text-glow">Digital Reality</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            NexTechZen crafts pixel-perfect, lightning-fast websites and powerful web applications that drive real business growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-cyan text-navy font-semibold rounded-full hover:bg-white transition-all duration-300 box-glow hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Project Now
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Portfolio
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Web Development Workspace" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay rounded-xl"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 glass rounded-2xl p-4 z-30 shadow-2xl flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center">
                <span className="text-cyan font-bold text-2xl">React</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-10 w-40 h-24 glass rounded-2xl p-4 z-30 shadow-2xl flex flex-col justify-center"
            >
              <div className="w-full h-2 bg-white/10 rounded-full mb-2">
                <div className="w-3/4 h-full bg-cyan rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono">Performance: 99%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
