'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { SEOHeading } from './SEO';
import { faqSchema } from '../app/lib/schema';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que é fisioterapia pediátrica?",
    answer: "A fisioterapia pediátrica é uma especialidade que atua no desenvolvimento motor de bebês e crianças, tratando alterações neurológicas, respiratórias e ortopédicas através de técnicas específicas e lúdicas adaptadas à idade da criança."
  },
  {
    question: "A partir de que idade pode fazer fisioterapia?",
    answer: "A fisioterapia pediátrica pode ser iniciada desde os primeiros dias de vida, especialmente em casos de prematuridade, alterações no desenvolvimento ou quando há necessidade de estimulação precoce."
  },
  {
    question: "Como é feita a avaliação fisioterapêutica pediátrica?",
    answer: "A avaliação inclui anamnese detalhada, observação do desenvolvimento motor, testes específicos para a idade, análise postural e funcional, sempre de forma lúdica e respeitando o tempo da criança."
  },
  {
    question: "Quais condições são tratadas na fisioterapia pediátrica?",
    answer: "Tratamos alterações neurológicas (paralisia cerebral, síndrome de Down), respiratórias (bronquiolite, asma), ortopédicas (escoliose, deformidades), atraso no desenvolvimento motor e muito mais."
  },
  {
    question: "Os pais podem participar das sessões?",
    answer: "Sim! A participação dos pais é fundamental. Eles são orientados sobre exercícios, posicionamentos e atividades que podem realizar em casa para potencializar os resultados do tratamento."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden" id="faq" aria-labelledby="faq-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-300"></div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl mb-6 shadow-lg transform rotate-3">
            <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
          </div>
          <SEOHeading level={2} id="faq-heading" className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Perguntas Frequentes sobre Fisioterapia Pediátrica
          </SEOHeading>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre fisioterapia pediátrica e desenvolvimento infantil
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                openItems.includes(index) ? 'ring-2 ring-primary-200 shadow-2xl' : ''
              }`}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-white/50 transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-100 to-blue-100 rounded-full flex items-center justify-center mt-1 group-hover:from-primary-200 group-hover:to-blue-200 transition-colors duration-300">
                    <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span 
                    className="font-semibold text-gray-800 text-lg leading-relaxed group-hover:text-primary-700 transition-colors duration-300"
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-primary-500 transition-all duration-300 flex-shrink-0 ml-4 ${
                    openItems.includes(index) ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="px-8 pb-6 ml-12 text-gray-700 leading-relaxed pl-6"
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div 
                    itemProp="text" 
                    className="text-lg animate-fade-in"
                    style={{
                      animationDelay: openItems.includes(index) ? '200ms' : '0ms',
                      animationFillMode: 'both'
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não encontrou a resposta que procurava?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Estou aqui para esclarecer todas as suas dúvidas sobre fisioterapia pediátrica
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
