
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "María García",
      role: "Madre de Emma, 9 años",
      content: "alaula ha transformado por completo la rutina de estudio de mi hija. Ahora está emocionada por aprender y me encanta cómo está desarrollando habilidades más allá del currículo tradicional.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Carlos Rodríguez",
      role: "Padre de Mateo, 11 años",
      content: "Increíble plataforma. Mi hijo ha mejorado sus calificaciones en matemáticas y ciencias. La metodología de micro-lecciones es perfecta para mantener su atención.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ana Martínez",
      role: "Madre de Sofía, 8 años",
      content: "Lo que más valoro de alaula es cómo enseñan conceptos de finanzas a mi hija de una forma divertida. Es una educación realmente completa para el mundo actual.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 bg-alaula-offwhite md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="chip mb-3">Testimonios</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Lo que dicen nuestras familias
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-alaula-dark/80">
            Descubre cómo alaula está transformando la educación complementaria para familias en toda Latinoamérica.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white p-8 shadow-medium">
          <div 
            className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-alaula-yellow text-alaula-yellow" />
              ))}
            </div>
            
            <p className="mb-8 text-lg italic text-alaula-dark/90">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>
            
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img 
                  src={testimonials[activeIndex].imageUrl}
                  alt={testimonials[activeIndex].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-alaula-dark/70">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-alaula-blue w-6' : 'bg-alaula-blue/30'
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
