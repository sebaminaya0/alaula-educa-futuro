
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-alaula-blue">
              alaula<span className="text-alaula-yellow">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            <a
              href="#benefits"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
            >
              Beneficios
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
            >
              Preguntas frecuentes
            </a>
          </div>

          <div className="hidden md:block">
            <Button
              className="btn-primary"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Regístrate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-alaula-dark" />
            ) : (
              <Menu className="h-6 w-6 text-alaula-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="glass absolute inset-x-0 top-full z-50 flex flex-col space-y-4 p-6 md:hidden">
            <a
              href="#benefits"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-foreground transition-colors hover:text-alaula-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preguntas frecuentes
            </a>
            <Button
              className="btn-primary w-full"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Regístrate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-hero-pattern bg-alaula-offwhite pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 md:pr-8">
              <div className="animated-item animate-fade-in-down">
                <span className="chip mb-3">Educación complementaria</span>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-alaula-dark md:text-5xl lg:text-6xl">
                  Aprendizaje divertido, práctico y moderno desde casa
                </h1>
              </div>
              <p className="animated-item animate-fade-in-down text-lg text-alaula-dark/80">
                Muchos padres sienten que la educación tradicional no está preparando completamente a sus hijos para el futuro. <span className="font-semibold text-alaula-blue">alaula</span> complementa la escuela convencional con aprendizaje digital diseñado para niños y jóvenes de hoy.
              </p>
              <div className="animated-item animate-fade-in-down flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button 
                  className="btn-primary" 
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Regístrate para acceso anticipado
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="btn-secondary"
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicita más información
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative h-72 w-72 animate-float md:h-80 md:w-80 lg:h-96 lg:w-96">
                <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-alaula-blue/20 to-alaula-yellow/20 blur-xl"></div>
                <div className="glass absolute left-0 top-0 animate-pulse-soft rounded-2xl p-4 shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-alaula-blue text-white">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">Matemáticas</p>
                </div>
                <div className="glass absolute right-0 bottom-0 animate-pulse-soft rounded-2xl p-4 shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-alaula-green text-white">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">Ciencias</p>
                </div>
                <div className="glass absolute right-1/4 top-1/4 animate-pulse-soft rounded-2xl p-4 shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-alaula-yellow text-white">
                    <span className="text-xl font-bold">!</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">Comunicación</p>
                </div>
                <div className="glass absolute left-1/4 bottom-1/4 animate-pulse-soft rounded-2xl p-4 shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-alaula-purple text-white">
                    <span className="text-xl font-bold">?</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">Habilidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
