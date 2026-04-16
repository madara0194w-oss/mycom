import { motion } from 'motion/react';

export function WhyUs() {
  return (
    <section className="py-24 relative bg-navy-light/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-cyan">NexTechZen</span>?
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                We don't just build websites; we build digital businesses. Our team combines deep technical expertise with a zen-like focus on user experience and business goals.
              </p>
              <p>
                Every project we undertake is crafted with precision. From the initial architecture to the final pixel, we ensure that your digital presence is not only visually stunning but also highly performant and scalable.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-white">Tailored Solutions:</strong> We understand that every business is unique, and we build custom solutions that fit your specific needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-white">Future-Proof Tech:</strong> Utilizing the latest frameworks and best practices to keep you ahead of the curve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-white">Unwavering Support:</strong> Our relationship doesn't end at launch. We provide continuous support and optimization.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="NexTechZen Team" 
              className="w-full h-full object-cover rounded-2xl grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-4 rounded-xl inline-flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-medium">Team collaborating in our Chittagong HQ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
