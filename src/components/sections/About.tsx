import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-navy-light/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass p-2 z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="NexTechZen Team" 
                className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Are <span className="text-cyan text-glow">NexTechZen</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A passionate team of 40+ creative developers, designers, and digital strategists based in Chittagong, Bangladesh. 
              </p>
              <p>
                We combine Eastern mindfulness with cutting-edge Western technology to deliver calm, efficient, and powerful digital experiences. We believe that great software should feel invisible—solving complex problems while remaining intuitive and beautiful.
              </p>
            </div>

            <div className="mt-10 p-6 glass rounded-2xl border-l-4 border-l-cyan relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Our Mission</h3>
              <p className="text-cyan italic">
                "To bring zen-like simplicity and excellence to every digital product we build."
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 bg-white text-navy font-semibold rounded-full hover:bg-cyan transition-colors duration-300">
                Meet The Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
