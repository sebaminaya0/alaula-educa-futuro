
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [faqs] = useState<FAQItem[]>([
    {
      question: "¿Cómo complementa alaula la educación escolar de mi hijo?",
      answer: "alaula ofrece micro-lecciones diarias que refuerzan el contenido del currículo escolar y añaden conocimientos prácticos que no suelen enseñarse en las escuelas, como finanzas personales, tecnología avanzada, salud emocional y pensamiento crítico. Nuestro enfoque se basa en hacer el aprendizaje divertido e interactivo."
    },
    {
      question: "¿Cuánto tiempo deben dedicar los niños a alaula cada día?",
      answer: "Nuestras micro-lecciones están diseñadas para completarse en 15-20 minutos diarios, haciendo que sea fácil integrarlas en la rutina familiar sin sobrecarga. Esta duración está optimizada para maximizar la atención y retención de conocimientos en niños y jóvenes."
    },
    {
      question: "¿Cuál es el costo mensual de la plataforma?",
      answer: "Ofrecemos planes mensuales asequibles con opciones que se adaptan a diferentes presupuestos familiares en Latinoamérica. Durante nuestro lanzamiento, tendremos promociones especiales para los primeros usuarios registrados. Los precios exactos se anunciarán pronto."
    },
    {
      question: "¿Para qué edades está diseñado el contenido de alaula?",
      answer: "Nuestro contenido está adaptado para niños y jóvenes de 6 a 16 años, con programas específicos divididos por rangos de edad para asegurar que el material sea apropiado y efectivo para cada etapa de desarrollo."
    },
    {
      question: "¿En qué dispositivos puedo acceder a alaula?",
      answer: "alaula está disponible en cualquier dispositivo con navegador web: computadoras, laptops, tablets y smartphones. También contamos con aplicaciones nativas para iOS y Android que optimizan la experiencia en dispositivos móviles."
    },
    {
      question: "¿Necesito conocimientos tecnológicos para ayudar a mi hijo con alaula?",
      answer: "No, nuestra plataforma está diseñada para ser intuitiva y fácil de usar tanto para niños como para padres. Además, ofrecemos guías y soporte para ayudarte en el proceso de acompañamiento educativo."
    }
  ]);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="chip mb-3">Preguntas frecuentes</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Todo lo que necesitas saber
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-alaula-dark/80">
            Resolvemos tus dudas sobre nuestra plataforma educativa digital.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-alaula-blue/10 rounded-xl px-6 overflow-hidden shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-alaula-dark/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
