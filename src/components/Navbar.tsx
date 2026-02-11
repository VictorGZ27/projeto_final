import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Horários", href: "#horarios" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground tracking-wide">
            BARBEARIA <span className="text-gradient-gold">ANDRADE</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#agendamento"
          className="hidden md:inline-flex bg-gradient-gold text-primary-foreground px-6 py-2 rounded font-body text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          Agendar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#agendamento"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-gold text-primary-foreground px-6 py-2 rounded font-body text-sm font-semibold tracking-wider uppercase"
                >
                  Agendar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
