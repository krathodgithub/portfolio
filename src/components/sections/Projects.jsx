import Section from '../common/Section'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my recent work and creative solutions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
