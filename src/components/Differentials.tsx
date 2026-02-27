import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Heart, 
  Zap, 
  Lock,
  MessageCircle,
  Clock
} from 'lucide-react';

const differentials = [
  {
    icon: Target,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é atendido de forma individual e direta pela advogada, com análise detalhada do caso e estratégia construída conforme a realidade apresentada.',
    color: 'blue',
  },
  {
    icon: Heart,
    title: 'Atuação Minuciosa e Técnica',
    description: 'Cada documento, prova e circunstância são examinados com atenção aos detalhes, garantindo segurança e fundamentação adequada em cada etapa do processo.',
    color: 'rose',
  },
  {
    icon: Zap,
    title: 'Compromisso com Excelência',
    description: 'A atuação é orientada por estratégia clara e objetiva, buscando soluções eficazes e juridicamente adequadas para cada situação.',
    color: 'amber',
  },
  {
    icon: Lock,
    title: 'Transparência e Comunicação Clara',
    description: 'Todas as etapas do processo são explicadas de forma acessível, sem juridiquês desnecessário, para que o cliente compreenda seus direitos e decisões.',
    color: 'emerald',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento em Todas as Etapas',
    description: 'Seja em consultoria ou atuação judicial, o acompanhamento é contínuo, com dedicação e responsabilidade desde a análise inicial até a conclusão do caso.',
    color: 'violet',
  },
  {
    icon: Clock,
    title: 'Ética e Sigilo Profissional',
    description: 'O atendimento é conduzido com absoluto respeito à confidencialidade, ética profissional e responsabilidade jurídica.',
    color: 'cyan',
  },
];

const colorClasses: Record<string, { bg: string; icon: string }> = {
  blue: { bg: 'bg-blue-50 group-hover:bg-blue-600', icon: 'text-blue-600 group-hover:text-white' },
  rose: { bg: 'bg-rose-50 group-hover:bg-rose-600', icon: 'text-rose-600 group-hover:text-white' },
  amber: { bg: 'bg-amber-50 group-hover:bg-amber-600', icon: 'text-amber-600 group-hover:text-white' },
  emerald: { bg: 'bg-emerald-50 group-hover:bg-emerald-600', icon: 'text-emerald-600 group-hover:text-white' },
  violet: { bg: 'bg-violet-50 group-hover:bg-violet-600', icon: 'text-violet-600 group-hover:text-white' },
  cyan: { bg: 'bg-cyan-50 group-hover:bg-cyan-600', icon: 'text-cyan-600 group-hover:text-white' },
};

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-4">
            Por Que Me Escolher
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meus
            <span className="text-amber-600"> Diferenciais</span>
          </h2>
          <p className="text-lg text-slate-600">
            Além do conhecimento técnico, ofereço uma experiência jurídica 
            diferenciada que coloca você no centro de tudo.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const colors = colorClasses[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${colors.bg}`}>
                    <item.icon className={`w-7 h-7 transition-colors duration-300 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
