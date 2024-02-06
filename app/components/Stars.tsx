const numStars = 100
const animationDuration = 2000

export default function Stars() {
  return (
    <div className="overflow-hidden absolute inset-0 -z-10">
      {new Array(numStars).fill(1).map((_, index) => {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const size = Math.random() * 5
        return (
          <div
            className="animate-pulse bg-neutral-900 dark:bg-neutral-50 rounded-full absolute"
            key={index}
            style={{
              animationDelay: `${index * (animationDuration / numStars)}ms`,
              animationDuration: `${animationDuration}ms`,
              height: size,
              left: `${x}%`,
              opacity: `${100 - y}%`,
              top: `${y}%`,
              width: size,
            }}
          />
        )
      })}
    </div>
  )
}
