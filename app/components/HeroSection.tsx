"use client";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Heart, Sparkles, Star } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🐾</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce-soft">🐕</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-float">🐱</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-bounce-soft">❤️</div>
        
        {/* Pastel floating shapes */}
        <div className="absolute top-32 right-32 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 left-60 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-bounce-soft"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Cuidado Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Seu pet merece todo o
              <span className="block">amor do mundo</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Ofereço cuidados personalizados para o seu melhor amigo enquanto você está fora. 
              Com muito carinho, diversão e segurança garantida.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Mais de 50 pets felizes
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Agendar Cuidado
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative z-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Pessoa brincando com cachorro e gato em ambiente aconchegante"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          {/* Decorative elements around the image */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary rounded-full opacity-40 animate-bounce-soft"></div>
        </div>
      </div>
    </section>
  );
}