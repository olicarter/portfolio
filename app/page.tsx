import AnimatedGradient from '@/app/components/AnimatedGradient'
import Avatar from '@/app/components/Avatar'
import Stars from '@/app/components/Stars'
import MoonPhase from '@/app/components/MoonPhase'

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-32 items-stretch flex flex-col gap-32 max-w-screen-sm mx-auto">
      <Stars />

      <header className="flex items-center justify-between">
        <h1 className="text-center text-rose-500">Oli Carter</h1>
        <Avatar />
      </header>

      {/* <hr className="dark:border-neutral-800 mx-auto w-1/2" /> */}

      <div className="dark:prose-invert max-w-screen-sm prose prose-neutral">
        <p>
          When I&apos;m not building UIs and APIs for employers like{' '}
          <a href="https://www.seenit.io" rel="noreferrer" target="_blank">
            Seenit
          </a>{' '}
          and{' '}
          <a href="https://www.spill.chat" rel="noreferrer" target="_blank">
            Spill
          </a>
          , you&apos;ll most likely find me walking with my dog or enjoying some
          form of side project.
        </p>
        <p>
          Recently those include bread baking, croissant making, synthesizer
          noodling, electronic engineering, and seeing what interesting things I
          can create with code.
        </p>
        <p>
          Check out my{' '}
          <a
            href="https://github.com/olicarter"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>{' '}
          for various coding bits. Below are some nice UI experiments I&apos;ve
          been tinkering with recently.
        </p>
      </div>

      <hr className="dark:border-neutral-800 mx-auto w-1/2" />

      <section className="space-y-16">
        <div className="aspect-square w-full">
          <MoonPhase />
        </div>

        <div className="dark:prose-invert max-w-none prose prose-neutral">
          <h3>A minimal moon phase UI</h3>
          <p>I&apos;m a huge fan of minimalism.</p>
          <p>
            I also find the moon interesting and check the current phase from
            time to time.
          </p>
          <p>
            The sites and apps I find are usually full of data and ads, when all
            I want is a pretty UI, so I made one.
          </p>
          <p>
            3 HTML elements and some nifty CSS transforms later and voila! I
            deployed the useful version to{' '}
            <a
              href="https://moonphase-nu.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              moonphase-nu.vercel.app
            </a>{' '}
            so you can use it too, yay.
          </p>
          <p>
            It&apos;s PWA friendly so you can add it to your home screen and
            it&apos;ll feel like a native app.
          </p>
        </div>
      </section>

      <hr className="dark:border-neutral-800 mx-auto w-1/2" />

      <section className="space-y-16">
        <div className="aspect-square overflow-hidden rounded-full w-full">
          <AnimatedGradient className="contrast-125 h-full w-full" />
        </div>

        <div className="dark:prose-invert max-w-none prose prose-neutral">
          <h3>An infinitely changing animated gradient</h3>
          <p>
            I bought the{' '}
            <a
              href="https://threejs-journey.com"
              rel="noreferrer"
              target="_blank"
            >
              Three.js Journey
            </a>{' '}
            course some time ago (you should too, it&apos;s phenomenal) and
            subsequently became intrigued by noise algorithms.
          </p>
          <p>
            Here I used{' '}
            <a
              className="underline"
              href="https://www.npmjs.com/package/simplex-noise"
              rel="noreferrer"
              target="_blank"
            >
              simplex-noise
            </a>{' '}
            to create a gradient that is unique on every render and can be
            animated, resulting in the most magical effect ✨
          </p>
          <p>
            You can even animate the alpha value for incredible an aurora-esque
            effect.
          </p>
        </div>
      </section>
    </main>
  )
}
