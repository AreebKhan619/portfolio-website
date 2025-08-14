'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ExternalLink, Calendar } from 'lucide-react'
import { education } from '@/data/education'
import { Education as EducationType, ProjectDetails } from '@/types/portfolio'

function EducationCard({ edu, index }: { edu: EducationType; index: number }) {
  const renderDetail = (item: string | ProjectDetails) => {
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
                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium"
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
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
      
      <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              <div className="flex items-center text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span className="font-medium">{edu.duration}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {edu.degree}
            </h3>
            
            {edu.institutionURL ? (
              <a
                href={edu.institutionURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:text-blue-800 transition-colors font-semibold inline-flex items-center gap-2 mb-4"
              >
                {edu.institution}
                <ExternalLink size={16} />
              </a>
            ) : (
              <p className="text-lg text-gray-700 font-semibold mb-4">
                {edu.institution}
              </p>
            )}
            
            {edu.gpa && (
              <div className="mb-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                GPA: {edu.gpa}
              </div>
            )}
            
            <div className="space-y-3">
              <ul className="space-y-3">
                {edu.details.map((detail) => renderDetail(detail))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EducationSection() {
  return (
    <section id="education" className="section-spacing bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>
          
          <div className="space-y-16">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.id}
                edu={edu}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}