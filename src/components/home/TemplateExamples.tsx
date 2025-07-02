import { motion } from 'framer-motion';
const templates = [
  {
    name: 'Beso Infinito',
    preview: 'https://res.cloudinary.com/sorostica/image/upload/v1750976906/beso_infinito_t18nor.png',
    link: '/ejemplos/beso-infinito',
  },
  {
    name: 'Minimalista',
    preview: 'https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png',
    link: '/ejemplos/minimalista',
  },
  {
    name: 'Bosque',
    preview: 'https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png',
    link: '/ejemplos/bosque',
  },
  {
    name: 'Signature',
    preview: 'https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png',
    link: '/ejemplos/signature',
  },
];

export default function TemplateExamples() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-8 leading-tight">
            Algunos ejemplos <span className='text-slate-600'>de invitaciones</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Elige el diseño que más te inspire y visualiza cómo lucirá tu invitación digital antes de decidirte. Cada diseño está pensado para que tu evento sea único, elegante y memorable.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {templates.map((tpl) => (
            <div key={tpl.name} className="flex flex-col items-center">
              <img
                src={tpl.preview}
                alt={`Preview ${tpl.name}`}
                className="aspect-[3/5] max-h-[300px] rounded-xl object-cover mb-2"
              />
              <span className="block text-base text-gray-800 tracking-wide mb-2 uppercase letter-spacing-[0.08em] text-center">
                {tpl.name}
              </span>
              <a
                href={tpl.link}
                className="inline-block mt-1 px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold shadow-md hover:from-rose-600 hover:to-rose-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver ejemplo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 