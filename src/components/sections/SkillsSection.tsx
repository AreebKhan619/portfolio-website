'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'
import { Skill, Project } from '@/types/portfolio'

function SkillCategory({ title, skills: categorySkills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {categorySkills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200 cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          {project.name}
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
            >
              <Github size={16} className="mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const skillCategories = {
    'Frontend': skills.filter(skill => skill.category === 'frontend'),
    'Backend': skills.filter(skill => skill.category === 'backend'),
    'Tools': skills.filter(skill => skill.category === 'tools'),
    'Other': skills.filter(skill => skill.category === 'other'),
  }

  return (
    <section id="skills" className="section-spacing bg-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I work with and projects I&apos;ve built
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <SkillCategory
                key={category}
                title={category}
                skills={categorySkills}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}