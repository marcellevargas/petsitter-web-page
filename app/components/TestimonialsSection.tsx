"use client";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Clara",
      petName: "Luna",
      petType: "Golden Retriever",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "A Marina é simplesmente maravilhosa! A Luna fica super feliz quando sabe que vai ficar com ela. Sempre recebo fotos e vídeos mostrando como minha filhinha está se divertindo. Recomendo de olhos fechados!",
      highlight: "Profissional incrível"
    },
    {
      name: "Roberto Silva",
      petName: "Mimi",
      petType: "Gato Persa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "Precisei viajar a trabalho e estava muito preocupado com a Mimi, que é bem tímida. A Marina foi super paciente e carinhosa. Quando voltei, minha gatinha estava relaxada e feliz. Serviço excepcional!",
      highlight: "Cuidado excepcional"
    },
    {
      name: "Mariana Santos",
      petName: "Thor",
      petType: "Husky Siberiano",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "O Thor tem muita energia e precisa de exercícios constantes. A Marina entende perfeitamente as necessidades dele e sempre o deixa cansadinho e feliz. Ela realmente ama o que faz!",
      highlight: "Entende cada pet"
    },
    {
      name: "Carlos Eduardo",
      petName: "Belinha",
      petType: "Poodle Toy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "A Belinha é muito velinha e precisa de cuidados especiais. A Marina é super atenciosa com os horários dos remédios e sempre me tranquiliza com relatórios detalhados. Confiança total!",
      highlight: "Cuidados especiais"
    },
    {
      name: "Juliana Costa",
      petName: "Simba",
      petType: "Gato Laranja",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9d9ecc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "Contrato os serviços da Marina há mais de 2 anos. O Simba a adora! Ela é pontual, carinhosa e sempre disposta a ajudar. É mais que uma petsitter, é parte da família!",
      highlight: "Parte da família"
    },
    {
      name: "Fernando Oliveira",
      petName: "Jade",
      petType: "Border Collie",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "A Jade precisa de muita estimulação mental e a Marina sempre tem atividades criativas preparadas. Fico impressionado com a dedicação e o carinho que ela tem com todos os pets.",
      highlight: "Sempre criativa"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm uppercase tracking-wider">Depoimentos</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl max-w-2xl mx-auto">
            O que os tutores falam sobre nosso trabalho
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            A satisfação dos pets e a tranquilidade dos tutores são nossa maior recompensa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {testimonial.highlight}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs">🐾</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      Tutor(a) do {testimonial.petName} • {testimonial.petType}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl lg:text-3xl text-primary animate-bounce-soft">50+</div>
            <p className="text-sm text-muted-foreground">Pets Felizes</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl lg:text-3xl text-primary animate-bounce-soft">5</div>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl lg:text-3xl text-primary animate-bounce-soft">100%</div>
            <p className="text-sm text-muted-foreground">Satisfação</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl lg:text-3xl text-primary animate-bounce-soft">24/7</div>
            <p className="text-sm text-muted-foreground">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  );
}