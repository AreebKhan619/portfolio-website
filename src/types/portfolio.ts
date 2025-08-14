export interface Technology {
  name: string
  icon?: string
  link?: string | null
}

export interface ProjectDetails {
  text: string
  subPoints: string[]
  link?: string
  technologies?: Technology[]
}

export interface Experience {
  id: string
  duration: string
  role: string
  company: string
  companyURL?: string
  companyLogo?: string
  description: Array<string | ProjectDetails>
  bgColor?: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: Technology[]
  liveLink?: string
  repoLink?: string
  imageUrl?: string
}

export interface Skill {
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Education {
  id: string
  duration: string
  degree: string
  institution: string
  institutionURL?: string
  institutionLogo?: string
  details: Array<string | ProjectDetails>
  gpa?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  link?: string
  description?: string
}