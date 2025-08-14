import { Education } from '@/types/portfolio'

export const education: Education[] = [
  {
    id: 'btech-cse',
    duration: "July '16 - Oct '20",
    degree: "Bachelor of Engineering - Computer Science",
    institution: "Government College of Engineering, Aurangabad",
    institutionURL: "https://geca.ac.in",
    gpa: "7.6",
    details: [
      {
        text: "Final Year Project",
        subPoints: [
          "Plant-based disease detection and prevention system using Machine Learning",
          "Implemented CNN models with TensorFlow and Keras for image classification",
          "Built responsive web interface with ReactJS for farmers to upload and analyze plant images",
        ],
        link: "https://github.com/AreebKhan619/PlantDiseaseDetection",
        technologies: [
          { name: "ReactJS" },
          { name: "Semantic UI" },
          { name: "Flask" },
          { name: "TensorFlow" },
          { name: "Keras" },
        ],
      },
      "Runner up, Web Quest (Techfest event) 2017, 2018",
      "Winner, Spell Your Brain 2018, 2019",
    ],
  },
  {
    id: 'hsc',
    duration: "Nov '13 - Nov '15",
    degree: "Higher Secondary Certificate (12th)",
    institution: "Tyndale Biscoe School",
    gpa: "8.6",
    details: [
      "Got 120th position state-wide; Was awarded a national scholarship in the aforementioned college for my performance.",
    ],
  },
  {
    id: 'ssc',
    duration: "Nov '02 - Nov '13",
    degree: "Secondary School Certificate (10th)",
    institution: "Tyndale Biscoe School",
    gpa: "9.4",
    details: [
      "Scored 20th position state-wide",
      "Actively participated in extra-curricular activities, represented school in Art Competitions",
    ],
  },
]