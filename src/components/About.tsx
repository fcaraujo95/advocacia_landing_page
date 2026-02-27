import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação Acadêmica',
    description: 'Bacharel em Direito pela FMU',
  },
  {
    icon: BookOpen,
    title: 'Especializações',
    description: 'Especialista em Direito do Trabalho e Fundamentals of U.S. Legal System',
  },
  {
    icon: Award,
    title: 'Reconhecimentos',
    description: 'Certificação no programa Fundamentals of U.S. Legal System',
  },
];

const values = [
  'Compromisso absoluto com o cliente',
  'Transparência em todas as etapas',
  'Excelência técnica',
  'Atendimento humanizado e próximo',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-200 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-100 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Escritório de Advocacia"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <span className="block text-4xl font-bold">+13</span>
                  <span className="text-sm opacity-90">Anos de<br/>Experiência</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
              Sobre Mim
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Dra. Fernanda Misumi
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Com atuação jurídica desde 2005, Fernanda Misumi consolidou sua trajetória no Direito após graduar-se pela FMU em 2011. 
              É pós-graduada em Direito e Processo do Trabalho e possui formação 
              internacional nos Estados Unidos, pela Thomas Jefferson School of Law,
              com certificação no programa Fundamentals of U.S. Legal System.
              Sua formação é complementada por especialização em Negociação e Advocacy, fortalecendo sua atuação técnica e estratégica na defesa
              dos interesses de seus clientes.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Acredito que cada caso merece uma estratégia única, desenvolvida com 
              atenção aos detalhes e compreensão profunda das necessidades específicas 
              de quem confia em meu trabalho.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{value}</span>
                </div>
              ))}
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              {qualifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <div className="p-3 bg-amber-100 rounded-lg h-fit">
                    <item.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
