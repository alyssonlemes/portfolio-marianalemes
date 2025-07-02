import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send, Heart, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', childAge: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  } catch {
    alert('Erro ao enviar. Tente novamente.');
  }
};

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(16) 98859-6994",
      description: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "dramarianalemesd@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Clock,
      title: "Horários",
      content: "Seg-Sex: 8h às 18h",
      description: "Sáb: 8h às 12h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
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
            Vamos <span className="text-brand">Conversar?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estou aqui para esclarecer suas dúvidas e ajudar seu filho a alcançar seu máximo potencial. Entre em contato comigo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Informações de Contato</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Estou sempre disponível para conversar sobre as necessidades do seu filho. Escolha a forma de contato que for mais conveniente para você.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-primary-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                      <p className="text-brand font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="text-center">
                <Heart className="w-10 h-10 text-brand mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Agende sua Consulta</h3>
                <p className="text-slate-600 text-sm">Preencha o formulário e entrarei em contato em breve</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                        placeholder="Seu nome"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                        placeholder="seu@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-black placeholder-gray-400"
                        placeholder="(11) 99999-9999"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Idade da criança
                      </label>
                      <select
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-black"
                      >
                        <option value="">Selecione</option>
                        <option value="0-6m">0 a 6 meses</option>
                        <option value="6m-1a">6 meses a 1 ano</option>
                        <option value="1-2a">1 a 2 anos</option>
                        <option value="2-4a">2 a 4 anos</option>
                        <option value="4-6a">4 a 6 anos</option>
                        <option value="6a+">Acima de 6 anos</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 resize-none text-black placeholder-gray-400"
                      placeholder="Conte-me um pouco sobre as necessidades da criança..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-brand hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-slate-600 text-sm">
                    Obrigada pelo contato! Entrarei em contato em breve para agendarmos a consulta.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;