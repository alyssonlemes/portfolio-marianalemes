import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, MoveHorizontal, Baby, Heart, Users, Rocket, } from 'lucide-react';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "Alterações Neurológicas e genéticas",
      description: "Tratamento especializado para crianças com alterações neurológicas e genéticas",
      features: ["Paralisia cerebral", "Síndrome de down", "Distrofia muscular de Duchenne",],
      color: "from-brand to-primary-700"
    },
    {
      icon: Activity,
      title: "Atraso no desenvolvimento Motor",
      description: "Monitoramento, detecção e intervenção em atrasos nas habilidades motoras e marcos esperados para a idade.",
      features: ["Atraso no sentar", "Engatinhar assimétrico", "Atraso no andar"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: MoveHorizontal,
      title: "Torcicolo muscular",
      description: "Tratamento e rastreio do torcicolo muscular, congênito ou não,  causado por má postura, tensão muscular e posições inadequadas.",
      features: ["Inclinação da cabeça", "Dificuldade de olhar para os dois lados", "Preferência de um lado do corpo"],
      color: "from-primary-400 to-primary-500"
    },
    {
      icon: Baby,
      title: "Assimetria craniana",
      description: "Rastreio e tratamento conservador de assimetrias cranianas em bebês (variações no formato da cabeça) Principais áreas.",
      features: ["Plagiocefalia", "Braquicefalia", "Dolicocefalia"],
      color: "from-primary-600 to-primary-800"
    },
    {
      icon: Rocket,
      title: "Estimulação Precoce",
      description: "Atendimento especializado e individualizado para bebês prematuros e com risco de atraso no desenvolvimento.",
      features: ["Prematuridade", "Baixo peso ou sobrepeso", "Qualidade de vida"],
      color: "from-brand to-primary-600"
    },
    {
      icon: Users,
      title: "Mentorias e consultorias",
      description: "Programas de mentoria e consultoria personalizados para pais e cuidadores que buscam aprofundar seus conhecimentos sobre o desenvolvimento infantil e as necessidades específicas de seus filhos.",
      features: ["Orientações práticas", "Brincadeiras e atividades", "Empoderamento dos pais",],
      color: "from-primary-300 to-primary-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
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
            Meus <span className="text-brand">Serviços</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ofereço uma gama completa de serviços especializados em fisioterapia pediátrica, sempre com foco no desenvolvimento integral e bem-estar da criança.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Header with icon */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative z-10">
                  {React.createElement(service.icon, { className: "w-12 h-12 mb-4" })}
                  <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Principais áreas:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center space-x-3 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-brand rounded-full" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mariana's Professional Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Column */}
              <div className="relative p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-[32rem] h-[22rem] rounded-3xl shadow-2xl overflow-hidden"> {/* Aumentado para 352px */}
                    <Image 
                      src="/images/mariana-careful-specialist.jpg" 
                      alt="Mariana Lemes - Fisioterapeuta em ação"
                      width={704}
                      height={352}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Emojis */}
                  <motion.div
                    className="absolute -top-4 -left-6 text-4xl select-none"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🩺
                  </motion.div>

                  <motion.div
                    className="absolute top-8 -right-8 text-3xl select-none"
                    animate={{
                      y: [0, -12, 0],
                      x: [0, 8, -8, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7
                    }}
                  >
                    👶
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 right-4 text-3xl select-none"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }}
                  >
                    🤲
                  </motion.div>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    Cuidado <span className="text-brand">Especializado</span>
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Com formação especializada, dedico-me integralmente ao desenvolvimento de cada criança, oferecendo tratamentos personalizados e baseados nas mais modernas técnicas de fisioterapia pediátrica.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-green-100">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-slate-800">100%</span>
                    </div>
                    <p className="text-sm text-slate-600">Dedicação e cuidado</p>
                  </div>
                </div>

                <motion.div
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand to-primary-700 hover:from-primary-700 hover:to-brand text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Conhecer Mais Serviços</span>
                    <Heart className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Precisa de uma <span className="text-brand">Avaliação Personalizada?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cada criança é única e merece um plano de tratamento personalizado. Agende uma consulta para discutirmos as necessidades específicas do seu filho.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-brand hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Agendar Consulta</span>
              <Heart className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;