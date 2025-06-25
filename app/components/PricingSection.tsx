"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Crown, Heart, Star } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Cuidado Básico",
      icon: Heart,
      price: "80",
      period: "por dia",
      description: "Perfeito para cuidados essenciais",
      features: [
        "Alimentação 2x ao dia",
        "Passeio de 30min",
        "Companhia e carinho",
        "Relatório com fotos",
        "Limpeza da área do pet",
        "Suporte via WhatsApp"
      ],
      color: "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10",
      buttonColor: "bg-primary hover:bg-primary/90"
    },
    {
      name: "Cuidado Premium",
      icon: Star,
      price: "120",
      period: "por dia",
      description: "O mais popular entre os clientes",
      features: [
        "Tudo do plano Básico",
        "Alimentação 3x ao dia",
        "2 passeios por dia",
        "Brincadeiras e atividades",
        "Banho se necessário",
        "Cuidados extras personalizados",
        "Relatório detalhado com vídeos",
        "Suporte 24h"
      ],
      popular: true,
      color: "border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/20",
      buttonColor: "bg-secondary hover:bg-secondary/90 text-white"
    },
    {
      name: "Cuidado Royal",
      icon: Crown,
      price: "180",
      period: "por dia",
      description: "Experiência completa e luxuosa",
      features: [
        "Tudo do plano Premium",
        "Alimentação premium personalizada",
        "3 passeios + recreação",
        "Sessão de spa (banho + tosa)",
        "Massagem relaxante",
        "Transporte veterinário incluso",
        "Sessão de fotos profissional",
        "Relatório completo + álbum digital",
        "Concierge pet 24h"
      ],
      color: "border-accent/30 bg-gradient-to-br from-accent/10 to-accent/20",
      buttonColor: "bg-accent hover:bg-accent/90 text-white"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-soft-gray/50 to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm uppercase tracking-wider">Preços</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl max-w-2xl mx-auto">
            Escolha o plano ideal para seu pet
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Planos flexíveis e transparentes, sem taxas escondidas. 
            Desconto especial para cuidados de longo prazo!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.color} border-2 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'lg:scale-110 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm">
                    ⭐ Mais Popular ⭐
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl lg:text-4xl text-primary">R$ {plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${plan.buttonColor} text-white rounded-full py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                  size="lg"
                >
                  {plan.popular ? '🌟 Escolher Premium' : 'Escolher Plano'}
                </Button>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl">💎</div>
            <h4 className="text-sm">Desconto Fidelidade</h4>
            <p className="text-xs text-muted-foreground">
              15% off para contratos mensais
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl">🚀</div>
            <h4 className="text-sm">Sem Taxa de Adesão</h4>
            <p className="text-xs text-muted-foreground">
              Comece hoje mesmo, sem custos extras
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl">🔄</div>
            <h4 className="text-sm">Flexibilidade Total</h4>
            <p className="text-xs text-muted-foreground">
              Mude de plano quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}