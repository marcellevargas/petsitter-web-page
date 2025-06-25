"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Home, Scissors, Gamepad2, Camera, UtensilsCrossed, Stethoscope } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Pet Sitting",
      description: "Cuidado na casa do pet, mantendo a rotina familiar",
      features: ["Alimentação", "Passeios", "Companhia", "Relatórios"],
      price: "A partir de R$ 80/dia",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Scissors,
      title: "Banho & Tosa",
      description: "Serviços de higiene e beleza com produtos premium",
      features: ["Banho relaxante", "Tosa higiênica", "Corte de unhas", "Perfume"],
      price: "A partir de R$ 60",
      color: "bg-secondary/20 text-purple-600"
    },
    {
      icon: Gamepad2,
      title: "Recreação",
      description: "Atividades lúdicas e exercícios personalizados",
      features: ["Brincadeiras", "Exercícios", "Socialização", "Estimulação mental"],
      price: "A partir de R$ 50/hora",
      color: "bg-accent/20 text-green-600"
    },
    {
      icon: Camera,
      title: "Pet Fotografia",
      description: "Sessões de fotos para eternizar momentos especiais",
      features: ["Fotos profissionais", "Cenários únicos", "Edição inclusa", "Álbum digital"],
      price: "A partir de R$ 150",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Alimentação Especial",
      description: "Cuidados com dietas específicas e medicamentos",
      features: ["Dietas controladas", "Medicação", "Acompanhamento", "Relatório nutricional"],
      price: "A partir de R$ 40/refeição",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Stethoscope,
      title: "Cuidados Veterinários",
      description: "Acompanhamento em consultas e primeiros socorros",
      features: ["Transporte", "Acompanhamento", "Primeiros socorros", "Administração de remédios"],
      price: "A partir de R$ 100",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm uppercase tracking-wider">Serviços</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl max-w-2xl mx-auto">
            Cuidados completos para o seu melhor amigo
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Oferecemos uma gama completa de serviços personalizados para garantir 
            o bem-estar e felicidade do seu pet
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                    Popular
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-primary">{service.price}</span>
                </div>
              </CardContent>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato para serviços personalizados!
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <span className="text-2xl animate-bounce-soft">🐾</span>
            <span className="text-sm">Cada pet é único e especial</span>
            <span className="text-2xl animate-bounce-soft">🐾</span>
          </div>
        </div>
      </div>
    </section>
  );
}