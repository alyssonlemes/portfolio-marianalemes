import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Star } from "lucide-react";
import {
  FloatingElement,
} from "@/components/AdvancedAnimations";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SEOHeading } from "./SEO";

const Hero: React.FC = () => {
  return (
    <>
      {/* Fixed Social Media Icons */}
      <motion.div
        className="fixed bottom-4 left-1 sm:bottom-8 sm:left-2 z-50 flex flex-col gap-3 sm:gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="https://www.instagram.com/fisiomarianalemes/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group relative rounded-full bg-gradient-to-tr from-pink-400 via-red-400 to-yellow-300 p-1.5 sm:p-3 shadow-lg transition-all duration-300"
          aria-label="Siga Mariana Lemes no Instagram - Fisioterapeuta Pediátrica"
          title="Instagram - Dicas de fisioterapia pediátrica"
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            boxShadow: "0 10px 30px rgba(244, 63, 94, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <FaInstagram className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://www.linkedin.com/in/mariana-lemes-diamantino/?originalSubdomain=br"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group relative rounded-full bg-[#0077b5] p-1.5 sm:p-3 shadow-lg transition-all duration-300"
          aria-label="Conecte-se com Mariana Lemes no LinkedIn - Fisioterapeuta Pediátrica"
          title="LinkedIn - Perfil profissional"
          whileHover={{ 
            scale: 1.2,
            rotate: -360,
            boxShadow: "0 10px 30px rgba(0, 119, 181, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }
          }}
        >
          <FaLinkedinIn className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://wa.me/5516988596994"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group relative rounded-full bg-[#25d366] p-1.5 sm:p-3 shadow-lg transition-all duration-300"
          aria-label="Entre em contato com Mariana Lemes via WhatsApp - Fisioterapeuta Pediátrica"
          title="WhatsApp - Agende sua consulta"
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }
          }}
        >
          <FaWhatsapp className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-colors" />
        </motion.a>
      </motion.div>

    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50 relative overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-8 left-2 sm:top-20 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-28 right-2 sm:top-40 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-primary-300 rounded-full opacity-30"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1 sm:bottom-20 sm:left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-primary-400 rounded-full opacity-25"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-4 h-4" />
              <span>Especializada em Fisioterapia Pediátrica</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <SEOHeading 
                level={1} 
                id="hero-heading"
                className="text-slate-800 leading-tight"
                itemProp="name"
              >
                Mariana <span className="text-brand">Lemes</span>
              </SEOHeading>
              <p 
                className="text-xl md:text-2xl text-slate-600 font-light hero-description"
                itemProp="jobTitle"
              >
                Fisioterapeuta Pediátrica especializada em desenvolvimento infantil em Franca-SP
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              itemProp="description"
            >
              Com uma abordagem humanizada e especializada, ajudo bebês e crianças a
              alcançarem seu máximo potencial de desenvolvimento através de
              técnicas modernas de fisioterapia pediátrica e cuidado personalizado.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-brand hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center space-x-2 border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Conhecer Mais</span>
              </motion.a>
            </motion.div>


          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-slate-50">
                <Image
                  src="/images/mariana-profile.jpeg"
                  alt="Mariana Lemes - Fisioterapeuta Pediátrica"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>

              {/* Floating elements */}
              <FloatingElement amplitude={15} duration={4} delay={0}>
                <motion.div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </FloatingElement>

              <FloatingElement amplitude={10} duration={3} delay={1}>
                <motion.div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand rounded-2xl shadow-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </FloatingElement>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;