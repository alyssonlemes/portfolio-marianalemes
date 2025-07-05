import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import { ScrollReveal } from '@/components/AdvancedAnimations';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Cristina",
      content: "Excelente profissional. Muito atenciosa, cuidadosa, meu filho teve grandes avanços no processo de desenvolvimento, hoje com certeza é outra criança. Só tenho a agradecer por todo o empenho, dedicação e ótimo trabalho com ele. Gratidão 🙏",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Laura Rodrigues",
      content: "Excelente profissional,muito atenciosa, foi muito cuidadosa e paciente com minha bebê me auxiliou nas atividades e sempre está a disposição para esclarecer qualquer dúvida Indico a Dra. Mariana de olhos fechados ",
      rating: 5,
      image: "👩‍🦰"
    },
    {
      name: "Tati Barcelos",
      content: "Excelente profissional! Atenciosa! Ajudou com nossa bebê e estamos tendo resultados ótimos no desenvolvimento da pequena.",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "Flavinha Polo",
      content: "É sempre gratificante encontrar profissionais que são dedicados, carismáticos e amorosos no cuidado e avaliação com os nossos filhos. Agradeço pelo seu trabalho desde o comecinho na avaliação é uma maneira maravilhosa de reconhecer o carinho que têm na vida de nossas crianças. Vc é mil!!!!🥰😘",
      rating: 5,
      image: "👩‍🦱"
    },
    {
      name: "Mariane Souza",
      content: "Muito atenciosa e carinhosa com meu filho. Ajudou muito na questão da cabecinha dele e depois no desenvolvimento motor. Hj ele já está quase andando com 8 meses hehehe .Super recomendo o trabalho dela, um amor.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Nathane Covas",
      content: "Mari é uma excelente profissional!! Super atenciosa e cuidadosa.. sua explicação é de uma maneira simples e respeitosa, deixando nós papais muito confortáveis em entregar nosso bem precioso! Parabéns Mari, profissionais como você é que fazem a diferença.",
      rating: 5,
      image: "👩‍🦳"
    }
  ];

  const stats = [
    { emoji: "👶", label: "Cuidado com cada família" },
    { emoji: "💖", label: "Amor pela profissão" },
    { emoji: "🌱", label: "Evolução diária com as crianças" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
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
            O que as <span className="text-brand">Famílias</span> Dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A confiança das famílias é o que me motiva todos os dias. Veja alguns depoimentos de pais que confiaram no meu trabalho.
          </p>
        </motion.div>

        {/* Stats */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-4xl md:text-5xl mb-2">{stat.emoji}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative overflow-hidden group h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-full -mr-10 -mt-10 group-hover:bg-primary-100 transition-colors duration-300" />
              
              {/* Quote icon */}
              <motion.div
                className="absolute top-6 right-6 text-primary-200 group-hover:text-primary-300 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-600 leading-relaxed italic flex-grow mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-brand to-primary-700 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 text-pink-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Sua família também pode ter essa experiência
              </h3>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Agende uma consulta e descubra como posso ajudar seu filho a alcançar seu máximo potencial de desenvolvimento.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-brand hover:bg-primary-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Agendar Primeira Consulta</span>
                <Heart className="w-5 h-5 text-pink-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;