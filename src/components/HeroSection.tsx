import { motion } from "framer-motion";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da Barbearia Andrade"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="divider-gold w-24 mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            BARBEARIA
          </h1>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-6 tracking-tight">
            ANDRADE
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 tracking-wide">
            Tradição, estilo e cuidado masculino em cada detalhe. Sua melhor versão começa aqui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#agendamento"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded font-body text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              Agende seu Horário
            </a>
            <a
              href="#servicos"
              className="border border-primary/30 text-foreground px-8 py-4 rounded font-body text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
