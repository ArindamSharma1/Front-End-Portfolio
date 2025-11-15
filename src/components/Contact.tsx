import { motion, transform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, AlignLeftIcon } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 mt-1">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Email</h3>
                    <a
                      href="mailto:sharmaarindam091@gmail.com"
                      className="text-accent hover:text-accent-dark transition-colors mt-1"
                    >
                      sharmaarindam091@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 mt-1">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-accent hover:text-accent-dark transition-colors mt-1"
                    >
                      +91 8580705992
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 mt-1">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Location</h3>
                    <p className="text-slate-600 mt-1">
                      India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              className="space-y-6"
              variants={containerVariants}
              onSubmit={handleSubmit}
            >
              {/* <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  required
                />
              </motion.div> */}

              {/* <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  required
                />
              </motion.div> */}

              {/* <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="button-primary flex items-center gap-2 group w-full justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send
                  size={20}
                  className={`group-hover:translate-x-1 transition-transform ${
                    submitted ? 'hidden' : ''
                  }`}
                />
              </motion.button> */}

              {/* {submitted && (
                <motion.div
                  className="p-4 rounded-lg bg-accent/10 border border-accent text-accent text-center font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )} */}
            </motion.form>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 text-center text-sm text-slate-500 flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Uncomment below to show a centered logo/link */}
          {/* <a href="https://arindamsharma.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <img src="./src/images/A-Logo.png" alt="Arindam Logo" className="w-6 h-6" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};
