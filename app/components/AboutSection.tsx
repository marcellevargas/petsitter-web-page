"use client";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import { Heart, Award, Clock, Shield } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Amor Genuíno",
      description: "Cada pet é tratado como se fosse meu próprio filho"
    },
    {
      icon: Award,
      title: "Experiência",
      description: "5+ anos cuidando de pets com dedicação total"
    },
    {
      icon: Clock,
      title: "Disponibilidade",
      description: "Horários flexíveis para atender suas necessidades"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Ambiente seguro e supervisionado 24h"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1494790108755-2616c9d9ecc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Petsitter sorrindo abraçada com um cachorro dourado"
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            
            {/* Decorative card */}
            <Card className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm text-muted-foreground">Petsitter</div>
                <div className="text-sm">do Ano 2024</div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm uppercase tracking-wider">Sobre Mim</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl">
                Olá! Sou a Marina, apaixonada por pets desde sempre
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Desde criança, sempre tive uma conexão especial com os animais. 
                Transformei essa paixão em profissão há mais de 5 anos, e hoje 
                tenho o privilégio de cuidar dos pets mais especiais da cidade.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Acredito que cada pet tem sua personalidade única e merece cuidados 
                personalizados. Por isso, dedico tempo para conhecer cada um 
                individualmente e criar um ambiente acolhedor e divertido.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}