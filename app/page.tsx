import Image from 'next/image'
import AnimatedGradient from '@/app/components/AnimatedGradient'
import Blob from '@/app/components/Blob'
import Prose from '@/app/components/Prose'
import Section from '@/app/components/Section'
import SolarColor from '@/app/components/SolarColor'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen py-4 sm:py-8">
      <Section className="flex-col sm:flex-row items-center justify-between">
        <div className="h-32 overflow-hidden rounded-full shrink-0 sm:h-64 sm:order-2 sm:w-64 w-32">
          <Image
            alt="Oli Carter avatar"
            className="bottom-3 relative rounded-full"
            height={256}
            src="/me.jpg"
            width={256}
          />
        </div>
        <div>
          <h1>
            Hi, I&apos;m <span className="text-[#FF4F4F]">Oli</span>
          </h1>
          <p>Web developer, UI designer</p>
        </div>
      </Section>
      <Section>
        <Prose>
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
        </Prose>
        <AnimatedGradient className="aspect-video contrast-125 rounded-2xl" />
      </Section>
      <Section>
        <Prose>
          <h3>Geopalette</h3>
          <p>
            I love dark mode, it&apos;s the best, right up there with capacitive
            touch screens.
          </p>
          <p>
            Although, the jump between light and dark can feel a tad jarring.
          </p>
          <p>
            This is an experiment using key sunlight times in your location to
            generate a background color suitable for the time of day where you
            are.
          </p>
        </Prose>
        <SolarColor />
      </Section>
      <Section>
        <Prose>
          <h3>Just a blob™</h3>
          <p>
            Ok so after doing some{' '}
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
        </Prose>
        <Blob className="aspect-video" />
      </Section>
    </main>
  )
}
