import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Avenida Brigadeiro Faria Lima, 1572, sala 1022 - Jardim Paulistano, São Paulo - SP\nCEP: 01451-001',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(11) 91204-5757',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'misumifernanda@gmail.com',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 8h às 18h',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /*const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });*/

  /*const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    reset();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };*/

  return (
    <section id="contato" className="py-20 lg:py-32 bg-slate-50">
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
            Entre em Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Vamos Conversar Sobre
            <span className="text-amber-600"> Seu Caso</span>
          </h2>
          <p className="text-lg text-slate-600">
            Estou à disposição para ajudar. Preencha o formulário abaixo ou 
            utilize um dos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid place-items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-sm"
              >
                <div className="p-3 bg-amber-100 rounded-lg h-fit">
                  <item.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511912045757"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
            >
              <div className="p-3 bg-white/20 rounded-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Atendimento por WhatsApp</h4>
                <p className="text-sm opacity-90">Clique aqui para iniciar uma conversa</p>
              </div>
            </a>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
