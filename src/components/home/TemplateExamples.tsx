import { motion } from 'framer-motion';

interface Template {
  name: string;
  preview: string;
  link: string;
  color?: string;
}

interface TemplateExamplesProps {
  title: string;
  description: string;
  buttonText: string;
  templates: Template[];
  maxItems?: number;
}

export default function TemplateExamples({ title, description, buttonText, templates, maxItems }: TemplateExamplesProps) {
  const displayTemplates = maxItems ? templates.slice(0, maxItems) : templates;
  
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50/20 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(148,163,184,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(100,116,139,0.06),transparent_50%)]"></div>
      
      {/* Patrón de puntos sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-700 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayTemplates.map((tpl, index) => (
            <motion.div 
              key={tpl.name} 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Sombra de fondo sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-gray-300/15 rounded-2xl blur-xl transform translate-y-3 opacity-60"></div>
              
              {/* Card principal */}
              <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-gray-50/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg overflow-hidden h-full flex flex-col">
                {/* Elementos decorativos internos */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full blur-xl"></div>
                
                {/* Contenido de la card */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Imagen del template */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={tpl.preview}
                      alt={`Preview ${tpl.name}`}
                      className="aspect-[3/5] w-full object-cover"
                    />
                  </div>
                  
                  {/* Nombre del template */}
                  <h3 className="text-base font-semibold text-slate-800 mb-4 text-center tracking-wide uppercase letter-spacing-[0.08em] flex-grow flex items-center justify-center">
                    {tpl.name}
                  </h3>
                  
                  {/* Botón de acción */}
                  <a
                    href={tpl.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-slate-600 via-slate-700 to-gray-700 text-white text-sm font-semibold shadow-lg transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      {buttonText}
                    </span>
                  </a>
                </div>
                
                {/* Borde inferior decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}