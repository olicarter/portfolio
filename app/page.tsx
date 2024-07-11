import Image from 'next/image'
import AnimatedGradient from './components/AnimatedGradient'
import MoonPhase from './components/MoonPhase'
import Stars from './components/Stars'
import styles from './page.module.css'

export default async function ProjectsPage() {
  const dogNames = ['my doglet', 'my pooch', 'the doggo', 'Mr Doglington']
  const dogName = dogNames[Math.floor(Math.random() * dogNames.length)]

  return (
    <ul className={styles.projects}>
      <li className={`${styles.project} ${styles.candid}`} data-angle="135deg">
        <h3>
          <a
            href="https://candid-team.vercel.app"
            rel="noreferrer"
            target="_blank"
          >
            candid
          </a>
        </h3>
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
      <li className={`${styles.project} ${styles.moonphased}`}>
        <div className="absolute inset-0 z-0">
          <Stars />
        </div>
        <div className="absolute top-0 right-0 w-full translate-x-1/3 -translate-y-1/3">
          <MoonPhase />
        </div>
        <h3>
          <a
            href="https://moonphased.vercel.app"
            rel="noreferrer"
            target="_blank"
          >
            moonphased
          </a>
        </h3>
        <p>
          Oftentimes, when {dogName} or I have insomnia, I check the phase of
          the moon to see if there&apos;s any correlation.
        </p>
        <p>
          The results vary, but one constant is how cluttered the sites for
          checking the moon phase are. Sometimes, you want oodles of science to
          pore through. However, when you’re wide awake at 2 a.m., simplicity is
          your friend.
        </p>
        <p>
          That&apos;s why I made moonphased, a hyper-minimal UI for checking the
          moon phase in the dead of night.
        </p>
      </li>
      <li className={`${styles.project} ${styles.gradelicious}`}>
        <AnimatedGradient className="absolute inset-0 size-full -z-10" />
        <h3>gradelicious</h3>
        <p>
          My attempts to animate gradients using CSS were awkward and
          disappointing; they never felt as interesting, fluid, or organic as I
          envisioned.
        </p>
        <p>
          Having been exposed to noise algorithms through the fantastic Three.js
          Journey course, and armed with the superpower that is Github CoPilot,
          I set out to create the perfect noise-based gradient animation.
        </p>
        <p>
          The results were exactly what I wantedt; always moving, merging,
          fading, glowing, sometimes dark, sometimes pastel, infinitely random,
          yet performant and tweakable.
        </p>
      </li>
    </ul>
  )
}
