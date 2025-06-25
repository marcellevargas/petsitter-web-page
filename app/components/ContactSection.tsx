"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com um serviço de email real
    alert('Mensagem enviada! Entrarei em contato em breve 💕');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petType: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "Email",
      content: "marina@petlovecare.com",
      action: "mailto:marina@petlovecare.com"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24h disponível",
      action: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm uppercase tracking-wider">Contato</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl max-w-2xl mx-auto">
            Vamos cuidar do seu pet juntos?
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Entre em contato e vamos conversar sobre as necessidades do seu pet. 
            Atendimento personalizado e com muito amor!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span>Solicitar Orçamento</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-muted-foreground">
                        Seu Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Como você gostaria de ser chamado(a)?"
                        required
                        className="border-primary/20 focus:border-primary rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-muted-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="border-primary/20 focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm text-muted-foreground">
                        WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-primary/20 focus:border-primary rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm text-muted-foreground">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-primary/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="pet-sitting">Pet Sitting</option>
                        <option value="banho-tosa">Banho & Tosa</option>
                        <option value="recreacao">Recreação</option>
                        <option value="fotografia">Pet Fotografia</option>
                        <option value="alimentacao">Alimentação Especial</option>
                        <option value="veterinario">Cuidados Veterinários</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="petName" className="text-sm text-muted-foreground">
                        Nome do Pet
                      </label>
                      <Input
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        placeholder="Nome do seu melhor amigo"
                        className="border-primary/20 focus:border-primary rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="petType" className="text-sm text-muted-foreground">
                        Tipo/Raça
                      </label>
                      <Input
                        id="petType"
                        name="petType"
                        value={formData.petType}
                        onChange={handleInputChange}
                        placeholder="Ex: Golden Retriever, Gato Persa..."
                        className="border-primary/20 focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-muted-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-me sobre seu pet: personalidade, necessidades especiais, rotina, o que mais achar importante..."
                      rows={5}
                      className="border-primary/20 focus:border-primary rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Informações de Contato</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm">{info.title}</h4>
                      <p className="text-xs text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Fun fact card */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl animate-bounce-soft">🎉</div>
                <h4 className="text-sm">Primeira Visita Grátis!</h4>
                <p className="text-xs text-muted-foreground">
                  Conheça nosso trabalho sem compromisso. 
                  Seu pet vai amar!
                </p>
              </CardContent>
            </Card>

            {/* Emergency contact */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-destructive/10 to-orange-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl">🚨</div>
                <h4 className="text-sm">Emergência 24h</h4>
                <p className="text-xs text-muted-foreground">
                  Em casos de emergência, estou sempre disponível
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-destructive/30 text-destructive hover:bg-destructive hover:text-white"
                >
                  (11) 99999-9999
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}