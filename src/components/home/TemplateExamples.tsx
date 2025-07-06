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

function getRandomItems<T>(arr: T[], n: number): T[] {
  if (n >= arr.length) return arr;
  const shuffled = arr.slice().map(t => ({ t, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ t }) => t);
  return shuffled.slice(0, n);
}

export default function TemplateExamples({ title, description, buttonText, templates, maxItems }: TemplateExamplesProps) {
  const displayTemplates = maxItems ? getRandomItems(templates, maxItems) : templates;
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-8 leading-tight">
            {title}
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayTemplates.map((tpl) => (
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
                className={`inline-block mt-1 px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold shadow-md hover:from-rose-600 hover:to-rose-700 transition-colors duration-300${tpl.color ? ` from-${tpl.color}-500 to-${tpl.color}-600 hover:from-${tpl.color}-600 hover:to-${tpl.color}-700` : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 