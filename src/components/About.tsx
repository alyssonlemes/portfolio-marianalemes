import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Heart,
  Target,
  ExternalLink,
  BookOpen,
  Brain,
  Users,
} from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description:
        "Graduação em Fisioterapia pela UFTM e Especialização em Neuropediatria pela UFSCar",
    },
    {
      icon: Brain,
      title: "Especialização",
      description: "Apaixonada pela neurologia, com foco no desenvolvimento motor infantil",
    },
    {
      icon: Award,
      title: "Pesquisa e Projetos",
      description:
        "Participação em diversos projetos e pesquisas na área de desenvolvimento infantil",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Completamente apaixonada pela neurologia infantil",
    },
    {
      icon: Brain,
      title: "Especialização",
      description: "Foco no desenvolvimento motor de crianças",
    },
    {
      icon: Target,
      title: "Aprendizado Contínuo",
      description: "Constante busca por novos conhecimentos na área",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 to-primary-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sobre <span className="text-brand">Mim</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Olá, meu nome é Mariana Lemes Diamantino, fisioterapeuta pela UFTM e
            especializada em neuropediatria pela UFSCar. Sou completamente apaixonada 
            pela neurologia, principalmente relacionada ao desenvolvimento motor de crianças.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column */}
          <div className="flex flex-col h-full space-y-6">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-96 rounded-3xl shadow-xl overflow-hidden">
                  <Image
                    src="/images/mariana-profissional-picture.png"
                    alt="Mariana Lemes Diamantino - Fisioterapeuta Pediátrica"
                    width={500}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-brand rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-white/90 p-6 rounded-3xl border-2 border-brand/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-brand/40 flex flex-col justify-between flex-1"
              style={{ minHeight: "184px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-base font-semibold text-slate-800 mb-3">
                  Informações Principais
                </h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-brand" />
                    <span>Fisioterapeuta pela UFTM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-brand" />
                    <span>Especialista em Neuropediatria - UFSCar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-brand" />
                    <span>Apaixonada por desenvolvimento motor infantil</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6 flex flex-col h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">
                Minha Jornada
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Ao longo de minha trajetória acadêmica, participei de diversos 
                projetos e pesquisas na área de desenvolvimento infantil. Essa 
                experiência acadêmica sólida me proporcionou uma base científica 
                robusta para minha prática clínica.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Minha paixão pela neurologia infantil me levou a buscar constantemente 
                novos aprendizados e oportunidades de crescimento, sempre com o objetivo 
                de oferecer o melhor cuidado possível para as crianças e suas famílias.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 flex-1">
              {/* ONG Information */}
               <motion.div
                className="bg-white/90 p-6 rounded-3xl border-2 border-blue-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-400 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-slate-800 mb-2">
                      Fundadora: United Women in Health
                    </h4>
                    <p className="text-slate-600 mb-3 leading-relaxed text-sm">
                      Em minha jornada por buscar novos aprendizados, fundei uma ONG 
                      parceira da Embaixada dos EUA, a United Women in Health. Uma 
                      iniciativa dedicada a fortalecer mulheres líderes na área da saúde.
                    </p>
                    <div className="space-y-2">
                      <motion.a
                        href="https://unwh.com.br/#home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>Conheça a ONG</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <br />
                      <motion.a
                        href="https://instagram.com/unwhealth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-200 text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>@unwhealth no Instagram</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* eBook Information */}
              <motion.div
                className="bg-white/90 p-6 rounded-3xl border-2 border-green-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-green-400 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-slate-800 mb-2">
                      eBook: Guia de Brinquedos
                    </h4>
                    <p className="text-slate-600 mb-3 leading-relaxed text-sm">
                      Guia prático para escolher brinquedos que estimulam o
                      desenvolvimento motor infantil.
                    </p>
                    <motion.a
                      href="https://ebookbrinquedos.my.canva.site/brinquedos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Adquirir eBook</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Qualificações e <span className="text-brand">Experiência</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-brand" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Meus <span className="text-brand">Diferenciais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;