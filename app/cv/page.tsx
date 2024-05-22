import { type ReactNode } from 'react'
import Avatar from '@/app/components/Avatar'
import './style.css'

const data = {
  summary:
    'I am Oliver Carter, a web developer with 8 years of experience developing a diverse range of websites, from small freelance projects and rapid prototypes, to vast component libraries and complex enterprise applications. I currently work as a Full Stack Developer, where I am developing and maintaining a large React component library, multiple GraphQL and REST APIs, and a comprehensive test suite. Whilst my roles have always required working across the stack, my time and passions have always been heavily focused on building UIs.',
  experience: [
    {
      company: 'Seenit',
      url: 'https://seenit.io',
      role: 'Full Stack Developer',
      date: 'Mar 2024 - Present',
      responsibilities: [
        'Developed and maintained the core enterprise video collaboration platform',
        'Implemented developer tooling that improved DX and type safety',
        'Created incremental migration plan for upgrading deprecated dependencies in large codebase that would enable usage of modern tooling',
      ],
    },
    {
      company: 'Spill',
      url: 'https://spill.chat',
      role: 'Product Developer',
      date: 'Dec 2021 - Nov 2023',
      responsibilities: [
        'Developed and maintained employee wellbeing platform, including Slack and Teams apps',
        'Managed projects, coordinating team and communicating expectations with wider company',
        'Contributed to full feature lifecycle, from ideation to delivery',
        'Designed features in Figma, working closely with product and marketing',
        'Mentored two interns over the course of a year',
      ],
    },
    {
      company: 'Seenit',
      url: 'https://seenit.io',
      role: 'Full Stack Developer',
      date: 'Mar 2019 - Nov 2021',
      responsibilities: [
        'Developed multiple greenfield frontend and backend codebases',
        'Contributed heavily to large React component library, using Storybook for parallel development',
        'Maintained legacy React frontend and Python backend',
        'Implemented frontend data caching strategies for improved performance',
        'Developed and maintained CI/CD pipelines using Kubernetes and Github Actions',
      ],
    },
  ],
  skills: [
    {
      name: 'JavaScript',
      years: 8,
      tools: ['TypeScript', 'React', 'Node.js'],
      description:
        'Proficient in TypeScript and React, I have a strong penchant for clear and simple code, using native APIs and web standards for longevity and maintainability.',
    },
    {
      name: 'CSS',
      years: 8,
      tools: ['Tailwind CSS', 'Styled Components'],
      description:
        "The resident expert in all places I've worked, I can rapidly build beautiful components, and have a deep understanding of the intricacies of implementing designs.",
    },
    {
      name: 'Testing',
      years: 5,
      tools: ['Jest', 'Cypress', 'Storybook'],
      description:
        'Experienced in writing unit, integration, E2E and visual regression tests. Implemented and maintained Storybook and reliable data mocking strategies.',
    },
  ],
}

export default function CVPage() {
  return (
    <div className="bg-neutral-50 flex flex-col items-center min-h-screen text-neutral-900">
      <header className="bg-emerald-900 flex flex-col items-center p-6 text-neutral-50 w-full">
        <div className="flex items-end justify-between max-a4">
          <div className="space-y-2">
            <h1>Oliver Carter</h1>
            <p>Web Developer</p>
          </div>
          <Avatar size={128} />
        </div>
      </header>
      <div className="flex flex-col items-center p-6">
        <div className="*:space-y-12 gap-x-12 grid grid-cols-3 max-a4">
          <div>
            <section>
              <h3>Contact</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="mailto:me@olicarter.dev">me@olicarter.dev</a>
                </li>
                <li>
                  <a
                    className="line-clamp-1 text-ellipsis"
                    href="https://www.linkedin.com/in/olicarter"
                  >
                    linkedin.com/in/olicarter
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Skills</h3>
              <ul className="space-y-4">
                {data.skills.map(skill => (
                  <Item
                    key={skill.name}
                    heading={skill.name}
                    annotation={`${skill.years}y`}
                    subheading={`Tools: ${skill.tools.join(', ')}`}
                    body={<p>{skill.description}</p>}
                  />
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-2">
            <section>
              <h3>Summary</h3>
              <p>{data.summary}</p>
            </section>
            <section>
              <h3>Experience</h3>
              <ul className="space-y-4 text-sm">
                {data.experience.map(experience => (
                  <Item
                    key={experience.company}
                    heading={experience.role}
                    annotation={experience.date}
                    subheading={
                      <a href={experience.url} rel="noreferrer" target="_blank">
                        {experience.company}
                      </a>
                    }
                    body={
                      <ul className="list-disc list-outside pl-[13px]">
                        {experience.responsibilities.map(responsibility => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    }
                  />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function Item(props: {
  heading: string
  annotation: string
  subheading: ReactNode
  body: ReactNode
}) {
  return (
    <li className="space-y-1">
      <header className="flex items-center justify-between">
        <h5>{props.heading}</h5>
        <span className="text-sm">{props.annotation}</span>
      </header>
      <p className="text-neutral-500 text-xs">{props.subheading}</p>
      {props.body}
    </li>
  )
}
