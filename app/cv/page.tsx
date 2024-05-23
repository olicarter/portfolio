import { type ReactNode } from 'react'
import Avatar from '@/app/components/Avatar'
import './style.css'

const data = {
  summary:
    "I'm Oli, a web developer with 6 years of experience developing a diverse range of websites, from small freelance projects and rapid prototypes, to vast component libraries and complex enterprise applications. I currently work as a Senior Front End Developer, where I am developing and maintaining a large React component library and a comprehensive test suite. Whilst my roles have typically required working across the stack, my time and passions have been heavily focused on UI development.",
  experience: [
    {
      company: 'Seenit',
      url: 'https://seenit.io',
      role: 'Senior Front End Developer',
      date: 'Mar 2024 - Present',
      responsibilities: [
        'Developed enterprise video collaboration platform, used by some of the largest companies in the world',
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
        'Lead on development of component library, ensuring consistency and maintainability',
        'Developed core features of mental health platform, including building for web, Slack, and Teams platforms',
        'Managed projects, coordinating team and communicating expectations with wider company',
        'Designed features in Figma, working closely with product and marketing ',
        'Contributed to full feature lifecycle, from ideation in cross-functional teams to post-release analysis',
        'Mentored two interns over the course of a year',
      ],
    },
    {
      company: 'Bring Your Own',
      role: 'Freelance Developer',
      date: '2022',
      responsibilities: [
        'Designed and developed website in React for local food delivery service',
        'Implemented KeystoneJS CMS for easy content management',
        'Integrated with Stripe for payments',
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
            <p>Web Developer</p>
          </div>
          <Avatar size={128} />
        </div>
      </header>
      <div className="flex flex-col items-center p-6">
        <div className="gap-x-12 grid grid-cols-3 max-a4">
          <div>
            <section>
              <h3>Contact</h3>
              <ul className="py-4 space-y-1 text-sm">
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
              <ul>
                {data.skills.map(skill => (
                  <Item
                    key={skill.name}
                    heading={skill.name}
                    // annotation={skill.years ? `${skill.years}y` : undefined}
                    subheading={skill.highlights.join(', ')}
                    body={<p>{skill.description}</p>}
                  />
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-2">
            <section>
              <h3>Summary</h3>
              <p className="py-4">{data.summary}</p>
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
