import { Scissors, Instagram, Facebook, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold tracking-wide">
                BARBEARIA <span className="text-gradient-gold">ANDRADE</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Tradição e estilo desde 2015. Cuidando do visual masculino com dedicação e profissionalismo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-4 text-primary">
              Navegação
            </h4>
            <ul className="space-y-2">
              {["Início", "Serviços", "Horários", "Agendamento"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-4 text-primary">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gold mb-6" />
        <p className="text-center font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Barbearia Andrade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
