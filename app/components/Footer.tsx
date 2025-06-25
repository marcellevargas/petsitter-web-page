"use client";
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary fill-current animate-bounce-soft" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl text-primary">PetLove Care</span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cuidando do seu melhor amigo com amor, carinho e dedicação há mais de 5 anos. 
              Cada pet é especial e merece cuidados únicos.
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-primary">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('precos')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Preços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-primary">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Pet Sitting
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Banho & Tosa
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Recreação
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Pet Fotografia
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Alimentação Especial
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Cuidados Veterinários
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-primary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">São Paulo, SP</span>
              </div>
              
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-3 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(11) 99999-9999</span>
              </a>
              
              <a
                href="mailto:marina@petlovecare.com"
                className="flex items-center space-x-3 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">marina@petlovecare.com</span>
              </a>
            </div>

            <div className="p-4 bg-primary/5 rounded-xl">
              <div className="text-center space-y-2">
                <div className="text-2xl">🕒</div>
                <h5 className="text-xs text-primary">Atendimento 24h</h5>
                <p className="text-xs text-muted-foreground">
                  Sempre disponível para emergências
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>&copy; {currentYear} PetLove Care. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center space-x-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-current animate-pulse" />
              <span>para pets especiais</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}