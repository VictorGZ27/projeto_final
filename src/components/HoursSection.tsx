import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const schedule = [
  { day: "Segunda-feira", hours: "09:00 - 19:00" },
  { day: "Terça-feira", hours: "09:00 - 19:00" },
  { day: "Quarta-feira", hours: "09:00 - 19:00" },
  { day: "Quinta-feira", hours: "09:00 - 20:00" },
  { day: "Sexta-feira", hours: "09:00 - 21:00" },
  { day: "Sábado", hours: "08:00 - 17:00" },
  { day: "Domingo", hours: "Fechado" },
];

const HoursSection = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0=Sunday
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // map JS day to schedule index

  return (
    <section id="horarios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Horários de <span className="text-gradient-gold">Atendimento</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Estamos prontos para atender você nos seguintes horários.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-lg border border-border p-6 md:p-8 shadow-gold">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Funcionamento</h3>
            </div>

            <div className="space-y-3">
              {schedule.map((item, i) => {
                const isToday = dayMap[currentDay] === i;
                const isClosed = item.hours === "Fechado";
                return (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-2 px-3 rounded font-body text-sm ${
                      isToday
                        ? "bg-primary/10 border border-primary/20"
                        : ""
                    }`}
                  >
                    <span className={`font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                      {item.day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Hoje
                        </span>
                      )}
                    </span>
                    <span className={isClosed ? "text-destructive" : "text-muted-foreground"}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="divider-gold mt-8 mb-6" />

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Rua da Barbearia, 123 — Centro, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
