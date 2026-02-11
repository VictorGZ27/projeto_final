import { motion } from "framer-motion";
import { Scissors, SprayCan, Sparkles, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    description: "Cortes modernos e clássicos com acabamento impecável.",
    price: "R$ 45",
    duration: "40 min",
  },
  {
    icon: Crown,
    title: "Barba Completa",
    description: "Aparar, modelar e hidratar com toalha quente.",
    price: "R$ 35",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Corte + Barba",
    description: "O combo perfeito para quem quer o pacote completo.",
    price: "R$ 70",
    duration: "60 min",
  },
  {
    icon: SprayCan,
    title: "Tratamento Capilar",
    description: "Hidratação profunda e revitalização dos fios.",
    price: "R$ 55",
    duration: "45 min",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Cada serviço é executado com precisão e dedicação total.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-primary">{service.price}</span>
                <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
