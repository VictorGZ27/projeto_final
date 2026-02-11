import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabese";



const services = [
  "Corte Masculino",
  "Barba Completa",
  "Corte + Barba",
  "Tratamento Capilar",
];

const barbers = ["Carlos Andrade", "Rafael Lima", "Diego Santos"];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !service || !date || !time) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const { error } = await supabase.from("appointments").insert([
      {
        name,
        phone,
        service,
        barber: barber || null,
        date,
        time,
      },
    ]);

    if (error) {
      console.error(error);
      toast.error("Erro ao realizar o agendamento. Tente novamente.");
      return;
    }

    setSubmitted(true);
    toast.success("Agendamento realizado com sucesso!");
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setService("");
    setBarber("");
    setDate("");
    setTime("");
    setSubmitted(false);
  };

  // Get min date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="agendamento" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider-gold w-16 mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Faça seu <span className="text-gradient-gold">Agendamento</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Reserve seu horário de forma rápida e prática.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary rounded-lg border border-primary/30 p-10 text-center shadow-gold"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Agendamento Confirmado!
              </h3>
              <p className="font-body text-muted-foreground mb-2">
                <strong className="text-foreground">{name}</strong>, seu horário
                está reservado.
              </p>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {service} — {date} às {time}
                {barber && ` com ${barber}`}
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded font-body text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                Novo Agendamento
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-secondary rounded-lg border border-border p-6 md:p-8 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <CalendarDays className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-semibold">
                  Reservar Horário
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Nome *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Serviço *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Barbeiro (opcional)
                  </label>
                  <select
                    value={barber}
                    onChange={(e) => setBarber(e.target.value)}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Sem preferência</option>
                    {barbers.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Data *
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-1.5">
                    Horário *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-muted border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Selecione um horário</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground py-4 rounded font-body text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-gold"
              >
                Confirmar Agendamento
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
