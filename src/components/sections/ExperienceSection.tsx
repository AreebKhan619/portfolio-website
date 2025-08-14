'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experiences } from '@/data/experiences'
import { Experience as ExperienceType, ProjectDetails } from '@/types/portfolio'

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const renderDescription = (item: string | ProjectDetails) => {
    if (typeof item === 'string') {
      return (
        <li key={item} className="text-gray-600 leading-relaxed">
          {item}
        </li>
      )
    }

    return (
      <li key={item.text} className="mb-4">
        <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          {item.text}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {item.subPoints.map((point, pointIndex) => (
            <li key={pointIndex} className="text-gray-600 leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </li>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      style={{ backgroundColor: experience.bgColor || '#ffffff' }}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {experience.role}
            </h3>
            {experience.companyURL ? (
              <a
                href={experience.companyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:text-blue-800 transition-colors font-semibold inline-flex items-center gap-2"
              >
                {experience.company}
                <ExternalLink size={18} />
              </a>
            ) : (
              <p className="text-xl text-gray-700 font-semibold">
                {experience.company}
              </p>
            )}
          </div>
          <div className="flex items-center text-gray-500 mt-2 md:mt-0">
            <Calendar size={18} className="mr-2" />
            <span className="font-medium">{experience.duration}</span>
          </div>
        </div>

        <div className="space-y-4">
          <ul className="space-y-4">
            {experience.description.map((item) => renderDescription(item))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing bg-gray-50">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles in software development, from intern to consultant
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}