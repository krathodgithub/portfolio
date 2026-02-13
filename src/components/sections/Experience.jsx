import Section from '../common/Section'
import Timeline from './Timeline'
import { experience } from '../../data/experience'

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background"
    >
      <Timeline items={experience} />
    </Section>
  )
}

export default Experience
