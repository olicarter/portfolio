import AnimatedGradient from '@/app/components/AnimatedGradient'
import Avatar from '@/app/components/Avatar'
import Blob from '@/app/components/Blob'
import Stars from '@/app/components/Stars'
import { SolarColorToday } from '@/app/components/SolarColor'

const now = new Date()

export default function Home() {
  return (
    <main className="gap-x-4 sm:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-8 sm:gap-y-16 lg:gap-y-24 xl:gap-y-32 grid justify-items-stretch md:grid-cols-2 min-h-screen px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="md:col-span-2 min-h-[80vh] flex flex-col gap-4 items-center justify-center">
        <Stars />
        <Avatar />

        <h1 className="text-rose-500">Oli Carter</h1>
        <p>Web developer, UI designer</p>
      </div>

      <div className="dark:prose-invert md:order-2 max-w-none prose prose-neutral">
        <h3>Gradients</h3>
        <p>
          Now I&apos;m not saying they belong everywhere, but tastfully done,
          gradients can bring much needed joy to an oftentimes bland browsing
          experience.
        </p>
        <p>
          There is one thing that makes gradients a must have though...
          <span className="font-bold whitespace-pre">
            {' '}
            {'Animation!'.split('').map((letter, index) => (
              <span className="relative text-transparent" key={index}>
                <span
                  className="absolute animate-bounce text-red-400"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    filter: `hue-rotate(${index * 36}deg)`,
                  }}
                >
                  {letter}
                </span>
                {letter}
              </span>
            ))}
          </span>
        </p>
        <p>
          Here&apos;s an example of an infinitely changing animated gradient
          using{' '}
          <a
            className="underline"
            href="https://www.npmjs.com/package/simplex-noise"
            rel="noreferrer"
            target="_blank"
          >
            simplex-noise
          </a>{' '}
          to generate the color values.
        </p>
      </div>
      <div className="aspect-video dark:bg-neutral-800 md:order-1 min-h-full overflow-hidden rounded-2xl">
        <AnimatedGradient className="contrast-125 h-full w-full" />
      </div>

      <div className="md:hidden" />

      <div className="dark:prose-invert max-w-none md:order-4 prose prose-neutral">
        <h3>Geopalette</h3>
        <p>
          I&apos;ve often pondered how to make the web feel more natural by
          using nature to guide design.
        </p>
        <p>
          This is an experiment using{' '}
          <a
            href="https://www.npmjs.com/package/suncalc"
            rel="noreferrer"
            target="_blank"
          >
            suncalc
          </a>{' '}
          to generate a background colors for various times of day.
        </p>
        <p>For example this how today in Tallinn, Estonia would look.</p>
      </div>
      <div className="md:order-3 not-prose">
        <SolarColorToday
          className="aspect-video min-h-full overflow-hidden rounded-2xl w-full"
          date={now}
        />
      </div>

      <div className="md:hidden" />

      <div className="dark:prose-invert max-w-none md:order-6 prose prose-neutral">
        <h3>Just a blob™</h3>
        <p>
          After doing some{' '}
          <a
            href="https://threejs-journey.com"
            rel="noreferrer"
            target="_blank"
          >
            Three.js Journey
          </a>{' '}
          lessons and discovering how to use noise algorithms to generate
          coherent random graphics, I wanted to apply it to everything.
        </p>
        <p>
          This is a just a blob™, not particularly useful but strangely
          hypnotic.
        </p>
      </div>
      <div className="aspect-video flex items-center justify-center md:order-5">
        <Blob />
      </div>
    </main>
  )
}
