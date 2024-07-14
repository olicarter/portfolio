import { type ReactNode } from 'react'
import Avatar from '@/app/components/avatar'
import './style.css'

const data = {
  summary:
    'Over 6 years of experience as a Full Stack Developer, developing and maintaining complex React applications and Node.js microservices. An expert in writing well-structured and strongly-typed code, with a keen understanding of best practices in code maintainability and parallel development in agile teams. Extensive experience refining, prioritising and translating product requirements into context-rich and organised tickets. Passionate about team culture through enthusiastic and inclusive communication, considered code reviews, knowledge sharing, and a focus on continual improvement.',
  experience: [
    {
      company: 'Seenit (Contract)',
      url: 'https://seenit.io',
      role: 'Senior Full Stack Developer',
      date: 'Mar 2024 - Jun 2024',
      responsibilities: [
        "Developed enterprise video collaboration platform, used by some of the world's largest companies",
        'Architected and developed features across FE and BE',
        'Automated developer tooling that improved DX and type safety',
        'Mentored peers in TypeScript, React and GraphQL best practices',
        'Documented plan for upgrading deprecated dependencies in large codebase, improving efficiency and enabling usage of modern tooling',
      ],
    },
    {
      company: 'Spill',
      url: 'https://spill.chat',
      role: 'Full Stack Developer',
      date: 'Dec 2021 - Nov 2023',
      responsibilities: [
        'Developed core features of mental health platform, including building for web, Slack, and Teams platforms',
        'Managed projects, coordinating cross-functional team and handling stakeholder communication',
        'Lead on development of React component library, implementing Storybook and MSW for isolated development',
        'Developed NestJS GraphQL microservices, including integrations with third-party APIs',
        'Designed features in Figma, working closely with product and marketing ',
        'Contributed to full feature lifecycle, from ideation in cross-functional teams to post-release analysis',
        'Mentored two interns over the course of a year',
      ],
    },
    {
      company: 'Seenit',
      url: 'https://seenit.io',
      role: 'Full Stack Developer',
      date: 'Mar 2019 - Nov 2021',
      responsibilities: [
        'Developed enterprise video collaboration platform',
        'Contributed heavily to large internal component library',
        'Created and developed REST and GraphQL APIs in a microservice architecture',
        'Developed and maintained containerised CI/CD pipeline',
        'Maintained legacy platform written with React class components and Python',
      ],
    },
    {
      company: 'Bring Your Own',
      role: 'Freelance Developer',
      date: '2022',
      responsibilities: [
        'Designed and developed website in React for local food delivery service',
        'Implemented KeystoneJS CMS for easy content management',
      ],
    },
  ],
  skills: [
    {
      name: 'JavaScript',
      // years: 8,
      highlights: ['TypeScript', 'React', 'Node.js'],
      description:
        'Experienced in developing and maintaining large codebases, primarily in React, with a strong preference for TypeScript.',
    },
    {
      name: 'Web Design',
      // years: 8,
      highlights: ['CSS', 'Tailwind', 'Three.js', 'Figma'],
      description:
        'Resident CSS wizard and go-to engineer for design feedback, with a keen eye for UI and a deep understanding of design implementation.',
    },
    {
      name: 'Developer Experience',
      // years: 5,
      highlights: ['Maintainability', 'Efficiency'],
      description:
        'A huge advocate of strong typing, concise code, thorough peer reviews and documentation, often using AI to simplify and refine code for ultimate clarity.',
    },
    {
      name: 'User Experience',
      // years: 8,
      highlights: ['Performance', 'Usability'],
      description:
        'Deeply passionate about creating delightful user experiences, considering every pixel and interaction, whilst marrying company goals with user needs.',
    },
  ],
}

export default function CVPage() {
  return (
    <div className="bg-neutral-50 flex flex-col items-center min-h-screen text-neutral-900">
      <header className="bg-emerald-900 flex flex-col items-center p-6 text-neutral-50 w-full">
        <div className="flex items-end justify-between max-a4">
          <div className="space-y-2">
            <h1>Oli Carter</h1>
            <p>Full Stack Developer</p>
          </div>
          <Avatar size={128} />
        </div>
      </header>
      <div className="flex flex-col items-center p-6">
        <div className="gap-x-12 grid grid-cols-3 max-a4">
          <aside>
            <section>
              <h3>Contact</h3>
              <ul className="pt-4 space-y-1 text-sm">
                <li>
                  <a href="mailto:me@olicarter.dev">me@olicarter.dev</a>
                </li>
                <li>
                  <a
                    className="line-clamp-1 text-ellipsis"
                    href="https://www.linkedin.com/in/olicarter"
                    rel="noreferrer"
                    target="_blank"
                  >
                    linkedin.com/in/olicarter
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Technologies</h3>
              <ul className="pt-4 flex flex-wrap gap-1.5 text-sm *:rounded *:px-1.5 *:leading-6 *:bg-emerald-500/20">
                <li>TypeScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>AWS</li>
                <li>GCP</li>
                <li>Node.js</li>
                <li>NestJS</li>
                <li>Storybook</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>Apollo</li>
                <li>Express</li>
                <li>Cypress</li>
                <li>Testing Library</li>
                <li>Jest/Vitest</li>
                <li>Github Actions</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </section>
            <section>
              <h3>Skills</h3>
              <ul className="pt-4 flex flex-wrap gap-1.5 text-sm *:rounded *:px-1.5 *:leading-6 *:bg-emerald-500/20">
                <li>Component development</li>
                <li>API development</li>
                <li>Product development</li>
                <li>Microservice development</li>
                <li>Feature prioritisation</li>
                <li>UI design</li>
                <li>Containerisation</li>
                <li>Project management</li>
              </ul>
            </section>
          </aside>
          <div className="col-span-2">
            <section>
              <h3>Summary</h3>
              <p className="pt-4">{data.summary}</p>
            </section>
            <section>
              <h3>Experience</h3>
              <ul className="text-sm">
                {data.experience.map(experience => (
                  <Item
                    key={experience.company}
                    heading={experience.role}
                    annotation={experience.date}
                    subheading={
                      experience.url ? (
                        <a
                          href={experience.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )
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
  annotation?: string
  subheading: ReactNode
  body: ReactNode
}) {
  return (
    <li className="py-4 space-y-1">
      <header className="flex items-center justify-between">
        <h5 className="leading-none">{props.heading}</h5>
        <span className="leading-none text-sm">{props.annotation}</span>
      </header>
      <p className="text-neutral-400 text-sm">{props.subheading}</p>
      {props.body}
    </li>
  )
}
