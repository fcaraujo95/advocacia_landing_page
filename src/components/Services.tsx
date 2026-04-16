import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Scale, 
  FileText, 
  Users, 
  Briefcase, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Reclamaçao Trabalhista',
    description: 'Atuação na defesa dos direitos do empregado em demandas judiciais decorrentes da relação de trabalho.',
    features: ['Verbas rescisórias não pagas', 'Horas extras e adicional noturno', 'FGTS não recolhido'],
  },
  {
    icon: Scale,
    title: 'Rescisão Indireta',
    description: 'Quando o empregador comete falta grave, o trabalhador pode encerrar o contrato com direito às verbas de demissão sem justa causa.',
    features: ['Falta de pagamento de salários', 'Assédio moral', 'Descumprimento contratual'],
  },
  {
    icon: FileText,
    title: 'Reversão de Justa Causa',
    description: 'Análise e atuação em casos de dispensa por justa causa aplicada de forma indevida.',
    features: ['Ausência de prova', 'Penalidade desproporcional', 'Falhas no procedimento disciplinar'],
  },
  {
    icon: Users,
    title: 'Dano Moral Trabalhista',
    description: 'Busca de indenização quando há violação à dignidade do trabalhador.',
    features: ['Assédio moral', 'Exposição vexatória', 'Humilhações reiteradas'],
  },
  {
    icon: Briefcase,
    title: 'Acidente e Doença do Trabalho',
    description: 'Atuação em casos envolvendo afastamentos, estabilidade e indenizações.',
    features: ['Acidente durante o trabalho', 'Doença ocupacional', 'Estabilidade provisória'],
  },
  {
    icon: Shield,
    title: 'Análise de Acordo Trabalhista',
    description: 'Revisão técnica de propostas antes da assinatura.',
    features: ['Conferência de valores', 'Avaliação de riscos', 'Orientação sobre direitos'],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Serviço Jurídico
            <span className="text-amber-600"> Especializado</span>
          </h2>
          <p className="text-lg text-slate-600">
            Ofereço serviços jurídicos completo e personalizado para empregados e empregadores, 
            desenvolvidas em base em 14 anos de experiência e conhecimento técnico aprofundado e abrangente.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <service.icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/5511912045757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors group/link"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">
            Não encontrou o que procura? Entre em contato para uma consulta personalizada.
          </p>
          <a
            href="https://wa.me/5511912045757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            Falar com a Dra. Fernanda
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
