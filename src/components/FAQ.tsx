'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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
    question: "Quando procurar um fisioterapeuta pediátrico?",
    answer: "Deve-se procurar quando há atraso no desenvolvimento motor, alterações posturais, dificuldades respiratórias, prematuridade, ou quando indicado pelo pediatra para estimulação precoce e prevenção de complicações."
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
    <section className="py-16 bg-white" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SEOHeading level={2} id="faq-heading" className="text-gray-900 mb-4">
            Perguntas Frequentes sobre Fisioterapia Pediátrica
          </SEOHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre fisioterapia pediátrica e desenvolvimento infantil
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span 
                  className="font-semibold text-gray-900 pr-4"
                  itemProp="name"
                >
                  {item.question}
                </span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div 
                  className="px-6 pb-4 text-gray-700 leading-relaxed"
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
