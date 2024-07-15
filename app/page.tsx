import Image from 'next/image'
import dynamic from 'next/dynamic'
import Gradielicious from 'gradielicious-react'
import MoonPhase from './components/MoonPhase'
import Stars from './components/Stars'
import styles from './page.module.css'
import { SiGithub, SiLinkedin, SiNpm } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import cn from '@/utils/cn'
import { calistoga, rowdies, slacksideOne, yellowtail } from '@/app/fonts'

const Cursor = dynamic(() => import('./components/cursor'), {
  ssr: false,
})
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
          <NeonLight />
          <h3 className={calistoga.className}>OLI CARTER</h3>
          <h3 className={calistoga.className}>web developer and designer</h3>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://github.com/olicarter"
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub size={28} />
            </a>
            <a
              className={styles.linkNpm}
              href="https://www.linkedin.com/in/olicarter/"
              rel="noreferrer"
              target="_blank"
            >
              <SiLinkedin size={28} />
            </a>
          </ul>
        </li>
        <li className={cn(styles.project, styles.gradelicious)}>
          <Gradielicious className="absolute inset-0 size-full -z-10" />
          <h3 className={yellowtail.className}>gradielicious</h3>
          <p>Infinitely random, ultra-performant gradients</p>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://gradielicious.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <Globe size={28} />
            </a>
            <a
              className={styles.linkCircle}
              href="https://github.com/olicarter/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub size={28} />
            </a>
            <a
              className={styles.linkNpm}
              href="https://npmjs.com/package/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiNpm size={28} />
            </a>
          </ul>
        </li>
        <li className={cn(styles.project, styles.moonphased)}>
          <Stars />
          <div className={styles.moon}>
            <MoonPhase />
          </div>
          <h3 className={slacksideOne.className}>moonphased</h3>
          <p>For checking the moon&apos;s phase in the dark of the night</p>
          <ul className={styles.links}>
            <a
              className={styles.linkCircle}
              href="https://moonphased.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <Globe size={28} />
            </a>
          </ul>
        </li>
        <li className={cn(styles.project, styles.candid)}>
          <h3 className={rowdies.className}>candid</h3>
          <p>AI-aggregated feedback platform for fast-moving teams</p>
          <div
            className="relative w-full"
            style={{
              perspective: '4000px',
              perspectiveOrigin: '100% 0',
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              alt="App screenshot"
              className="bg-emerald-950 rounded-[1.5vw] w-2/3"
              src="/candid-onboarding.png"
              width={1920}
              height={1920}
            />
            <Image
              alt="App screenshot"
              className="bg-emerald-950 rounded-[1.5vw] w-2/3"
              src="/candid-home.png"
              width={1920}
              height={1920}
            />
            <Image
              alt="App screenshot"
              className="bg-emerald-950 rounded-[1.5vw] w-2/3"
              src="/candid-settings.png"
              width={1920}
              height={1920}
            />
          </div>
        </li>
      </ul>
    </>
  )
}
