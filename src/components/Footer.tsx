import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pl-4 sm:pl-8 md:pl-16 lg:pl-20">
          {/* Logo e Descrição */}
          <motion.div
            className="space-y-4 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mariana Lemes</h3>
                <p className="text-primary-300 text-sm">Fisioterapeuta Pediátrica</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dedicada ao desenvolvimento saudável e bem-estar das crianças através de uma abordagem humanizada e especializada em fisioterapia pediátrica.
            </p>
            <div className="flex items-center space-x-2 text-primary-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Cuidado com amor e dedicação</span>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-primary-300">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-slate-300">(16) 98859-6994</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-slate-300">dramarianalemesd@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Horários */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-primary-300">Horários</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary-400" />
                <div className="text-sm text-slate-300">
                  <p>Segunda a Sexta</p>
                  <p className="text-primary-300">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary-400" />
                <div className="text-sm text-slate-300">
                  <p>Sábados</p>
                  <p className="text-primary-300">8h às 12h</p>
                </div>
              </div>
              <div className="text-sm text-slate-400 mt-3">
                Atendimento domiciliar disponível
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <motion.div
          className="border-t border-slate-700 mt-10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-sm text-slate-400">
              ©2025 Desenvolvido por Alysson Lemes.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;