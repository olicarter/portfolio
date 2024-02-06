import Image from 'next/image'
import AnimatedGradient from '@/app/components/AnimatedGradient'
import Blob from '@/app/components/Blob'
import { SolarColorToday } from '@/app/components/SolarColor'

export default function Home() {
  return (
    <main className="gap-x-4 sm:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-8 sm:gap-y-16 lg:gap-y-24 xl:gap-y-32 grid justify-items-stretch md:grid-cols-2 min-h-screen px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="md:col-span-2 min-h-[80vh] flex flex-col gap-4 items-center justify-center">
        <div className="not-prose h-48 overflow-hidden rounded-full shrink-0 w-48 place-self-center">
          <Image
            alt="Oli Carter avatar"
            className="bottom-3 relative rounded-full"
            height={256}
            src="/me.jpg"
            width={256}
          />
        </div>

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
          That is one thing that makes gradients a must have though...
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
      <AnimatedGradient className="aspect-video contrast-125 min-h-full md:order-1 rounded-2xl" />

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
        <SolarColorToday />
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
