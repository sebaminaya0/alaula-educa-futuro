
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { email, name, childAge });
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "¡Registro exitoso!",
        description: "Te enviaremos información sobre el acceso anticipado pronto.",
      });
    }, 1500);
  };

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-alaula-blue to-alaula-green p-8 md:p-12">
          {/* Background elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 grid gap-12 md:grid-cols-2">
            <div className="text-white">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                Lanzamiento próximo
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl">
                Prepara a tus hijos para el futuro con aprendizaje digital
              </h2>
              <p className="mt-4 text-white/90">
                Regístrate ahora para ser de los primeros en acceder a nuestra plataforma educativa y obtener beneficios exclusivos.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-alaula-yellow" />
                  <p className="text-sm">Acceso anticipado a todos los módulos</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-alaula-yellow" />
                  <p className="text-sm">Descuento especial para primeros usuarios</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-alaula-yellow" />
                  <p className="text-sm">Soporte personalizado de nuestro equipo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="rounded-full bg-alaula-green/20 p-3 mb-4">
                    <CheckCircle className="h-10 w-10 text-alaula-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Gracias por registrarte!</h3>
                  <p className="text-white/80 mb-6">
                    Te enviaremos información sobre el lanzamiento y cómo obtener acceso anticipado a tu correo electrónico.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Registrar otra cuenta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Regístrate para acceso anticipado</h3>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="mt-1 bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="name" className="text-white">Nombre</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      className="mt-1 bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childAge" className="text-white">Edad de tu hijo/a</Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="4"
                      max="17"
                      placeholder="Edad"
                      className="mt-1 bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-alaula-blue hover:bg-white/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Registrarme ahora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-white/70">
                    Al registrarte, aceptas nuestra política de privacidad y términos de servicio.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
