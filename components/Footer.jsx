'use client'

import { Cedarville_Cursive } from "next/font/google";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Heart, Code2, Send } from "lucide-react";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "About", href: "#" },
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="glass border-t border-blue-500/20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Branding */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <h3 className={`${cedarville.className} text-2xl gradient-text font-bold`}>
                Shiva Kumar
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer crafting exceptional digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((column, i) => (
            <motion.div key={i} variants={itemVariants} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shivakumar-h-p-927b621b4/", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/shivakumar202", label: "GitHub" },
                { Icon: Instagram, href: "https://www.instagram.com/_7ncognito?igsh=NHVqdWlzcGxua3Vh", label: "Instagram" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  className="w-10 h-10 rounded-lg glass border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-400/50 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-8"
        />

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.p variants={itemVariants} className="text-sm text-gray-400 text-center sm:text-left">
            © {currentYear} Shiva Kumar. All rights reserved.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-gray-400 flex items-center gap-2">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>{" "}
            and React
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;