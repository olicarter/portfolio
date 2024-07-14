import Image from 'next/image'
import dynamic from 'next/dynamic'
import Gradielicious from 'gradielicious-react'
import MoonPhase from './components/MoonPhase'
import Stars from './components/Stars'
import styles from './page.module.css'
import { SiGithub, SiNpm } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import Cursor from './components/cursor'
import cn from '@/utils/cn'

const NeonLight = dynamic(() => import('./components/NeonLight'), {
  ssr: false,
})

export default async function ProjectsPage() {
  const dogNames = ['my doglet', 'my pooch', 'the doggo', 'Mr Doglington']
  const dogName = dogNames[Math.floor(Math.random() * dogNames.length)]

  return (
    <>
      <Cursor />
      <ul className={styles.projects}>
        <li className={cn(styles.project, styles.bio)}>
          {Array.from({ length: 2 }).map((_, index) => (
            <NeonLight index={index} key={index} />
          ))}
          <h3>Oli Carter</h3>
          <p>Web developer and designer.</p>
        </li>
        <li className={cn(styles.project, styles.candid)}>
          <h3>candid</h3>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://candid-team.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <Globe />
            </a>
          </ul>
          <p>
            Feedback amongst teams is essential for a healthy culture, yet
            difficult to deliver and receive as intended.
          </p>
          <p>
            Candid aims to make feedback safe and easy through AI-powered
            anonymisation and aggregation.
          </p>
          <Image
            alt="App screenshot"
            className="bg-emerald-950 rounded-[3vmin] w-full min-w-[768px]"
            src="/candid-home.png"
            width={1280}
            height={720}
          />
        </li>
        <li className={cn(styles.project, styles.moonphased)}>
          <Stars />
          <div className="absolute top-0 right-0 w-full translate-x-1/3 -translate-y-1/3">
            <MoonPhase />
          </div>
          <h3>moonphased</h3>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://moonphased.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <Globe />
            </a>
          </ul>
          <p>
            Oftentimes, when {dogName} or I have insomnia, I check the phase of
            the moon to see if there&apos;s any correlation.
          </p>
          <p>
            The results vary, but one constant is how cluttered the sites for
            checking the moon phase are. Sometimes, you want oodles of science
            to pore through. However, when you’re wide awake at 2 a.m.,
            simplicity is your friend.
          </p>
          <p>
            That&apos;s why I made moonphased, a hyper-minimal UI for checking
            the moon phase in the dead of night.
          </p>
        </li>
        <li className={cn(styles.project, styles.gradelicious)}>
          <Gradielicious className="absolute inset-0 size-full -z-10" />
          <h3>gradielicious</h3>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://gradielicious.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <Globe />
            </a>
            <a
              className={styles.linkCircle}
              href="https://github.com/olicarter/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
            <a
              className={styles.linkNpm}
              href="https://npmjs.com/package/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiNpm />
            </a>
          </ul>
          <p>
            My attempts to animate gradients using CSS were awkward and
            disappointing; they never felt as interesting, fluid, or organic as
            I envisioned.
          </p>
          <p>
            Having been exposed to noise algorithms through the fantastic
            Three.js Journey course, and armed with the superpower that is
            Github CoPilot, I set out to create the perfect noise-based gradient
            animation.
          </p>
          <p>
            The results were exactly what I wanted; always moving, merging,
            fading, glowing, sometimes dark, sometimes pastel, infinitely
            random, yet performant and tweakable.
          </p>
        </li>
      </ul>
    </>
  )
}
