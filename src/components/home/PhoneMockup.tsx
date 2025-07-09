import React, { useState, useEffect } from 'react';
// Iconos simples para navegación
const ChevronLeftIcon = () => (
  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

interface EventSlide {
  id: string;
  name: string;
  date: string;
  image: string;
  buttons: string[];
  type: string;
}

interface PhoneMockupProps {
  events: EventSlide[];
  autoPlay?: boolean;
  interval?: number;
  texts: {
    home: {
      phoneMockup: {
        time: string;
        battery: string;
        eventTypes: {
          wedding: string;
          birthday: string;
          corporate: string;
          graduation: string;
        };
        events: any;
      };
    };
  };
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  events, 
  autoPlay = true, 
  interval = 4000,
  texts
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentEvent = events[currentSlide];

  return (
    <div className="flex-1 max-w-[280px] hidden lg:block">
      <div className="relative mx-auto">
        {/* Sombra del dispositivo */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300/40 to-slate-400/30 rounded-[2.5rem] blur-2xl transform translate-y-8 scale-105"></div>
        
        {/* Dispositivo */}
        <div className="relative border-slate-300 bg-slate-100 border-[13px] rounded-[2.5rem] h-[560px] w-[280px] shadow-2xl shadow-slate-300/50">
          {/* Botones laterales */}
          <div className="h-[32px] w-[3.5px] bg-slate-400 absolute -start-[15px] top-[70px] rounded-s-lg"></div>
          <div className="h-[44px] w-[3.5px] bg-slate-400 absolute -start-[15px] top-[120px] rounded-s-lg"></div>
          <div className="h-[44px] w-[3.5px] bg-slate-400 absolute -start-[15px] top-[170px] rounded-s-lg"></div>
          <div className="h-[60px] w-[3.5px] bg-slate-400 absolute -end-[15px] top-[140px] rounded-e-lg"></div>
          
          {/* Pantalla */}
          <div className="rounded-[2rem] overflow-hidden w-[252px] h-[528px] bg-white relative border border-slate-200">
            {/* Barra de estado */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 z-20 flex items-center justify-between px-5 text-white text-xs">
              <span>{texts.home.phoneMockup.time}</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-1.5 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Contenido de la invitación con transición fluida */}
            <div className="relative h-full overflow-hidden">
              <img
                src={currentEvent.image}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out transform scale-105"
                alt={`${currentEvent.type} invitation preview`}
                style={{
                  animation: 'fadeInScale 1s ease-in-out'
                }}
              />
              
              {/* Overlay con gradiente mejorado */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 transition-opacity duration-1000"></div>
              
              {/* Contenido de la invitación */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 pt-12">
                {/* Título del evento con animación */}
                <div className="text-center mb-8 transition-all duration-1000 ease-in-out transform">
                  <h3 
                    className="text-xl font-serif mb-2 text-shadow-lg transition-all duration-1000 ease-in-out"
                    style={{
                      animation: 'slideInUp 1s ease-out'
                    }}
                  >
                    {currentEvent.name}
                  </h3>
                  <div className="w-16 h-px bg-white/60 mx-auto mb-4 transition-all duration-1000 ease-in-out"></div>
                  <p 
                    className="text-sm text-white/90 font-light transition-all duration-1000 ease-in-out"
                    style={{
                      animation: 'slideInUp 1s ease-out 0.2s both'
                    }}
                  >
                    {currentEvent.date}
                  </p>
                </div>
                
                {/* Botones de acción con animación escalonada */}
                <div className="space-y-3 w-full max-w-[190px]">
                  {currentEvent.buttons.map((button, index) => (
                    <button 
                      key={index}
                      className="w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      style={{
                        animation: `slideInUp 1s ease-out ${0.4 + index * 0.1}s both`
                      }}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de tipo de evento con transición suave */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div 
            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg transition-all duration-1000 ease-in-out"
            style={{
              animation: 'fadeInDown 1s ease-out'
            }}
          >
            <span className="text-sm font-medium text-slate-700">
              {texts.home.phoneMockup.eventTypes[currentEvent.type.toLowerCase() as keyof typeof texts.home.phoneMockup.eventTypes] || currentEvent.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup; 