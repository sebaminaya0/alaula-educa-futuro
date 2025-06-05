
import { Check, Users, Clock, CreditCard, Trophy, Cpu, School, Smartphone } from 'lucide-react';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color: string;
}) => {
  return (
    <div className="animated-item animate-fade-in-up card-hover glass rounded-2xl p-6">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-2 font-display text-xl font-bold">{title}</h3>
      <p className="text-alaula-dark/80">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: School,
      title: "Contenido alineado al currículo",
      description: "Nuestro contenido está diseñado para complementar lo que tus hijos aprenden en la escuela.",
      color: "bg-alaula-orange"
    },
    {
      icon: Clock,
      title: "Micro-lecciones diarias",
      description: "Lecciones cortas y efectivas que se adaptan a la rutina y atención de los niños.",
      color: "bg-alaula-teal"
    },
    {
      icon: CreditCard,
      title: "Precio asequible",
      description: "Programas adaptados a todos los presupuestos familiares de Latinoamérica.",
      color: "bg-alaula-sunset"
    },
    {
      icon: Trophy,
      title: "Aprendizaje basado en juegos",
      description: "Elementos de gamificación que hacen divertido el proceso de aprendizaje.",
      color: "bg-alaula-yellow"
    },
    {
      icon: Cpu,
      title: "Habilidades para el siglo XXI",
      description: "Finanzas personales, tecnología, ética y pensamiento crítico.",
      color: "bg-alaula-orange-dark"
    },
    {
      icon: Users,
      title: "Preparación complementaria",
      description: "Refuerzo perfecto para un mejor desempeño en el colegio regular.",
      color: "bg-alaula-teal-dark"
    },
    {
      icon: Smartphone,
      title: "100% digital y accesible",
      description: "Disponible en cualquier dispositivo: móviles, tablets y computadoras.",
      color: "bg-alaula-dark"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="chip mb-3">Por qué elegirnos</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Transformando la educación complementaria con lo mejor de la tecnología
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-alaula-orange to-alaula-teal p-0.5">
          <div className="rounded-2xl bg-white px-6 py-6 md:px-8 md:py-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/lovable-uploads/6458541e-0cc7-4506-a90b-52627d5dc265.png" 
                    alt="Aulita - Colibrí mascota de alaula" 
                    className="h-12 w-12"
                  />
                  <h3 className="font-display text-2xl font-bold">Lo que los padres buscan, lo que los niños necesitan</h3>
                </div>
                <p className="mt-4 text-alaula-dark/80">
                  En alaula hemos diseñado una experiencia educativa que satisface la necesidad de complementar la educación escolar con habilidades prácticas y modernas.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Contenido práctico y alineado al currículo escolar.",
                  "Micro-lecciones diarias fáciles de seguir.",
                  "Precio asequible para todas las familias.",
                  "Aprendizaje interactivo basado en juegos.",
                  "Enseña habilidades clave para el siglo XXI.",
                  "Excelente preparación adicional para el colegio.",
                  "Plataforma 100% digital en todos los dispositivos."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-alaula-teal">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
