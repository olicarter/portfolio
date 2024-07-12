const numStars = 100
const animationDuration = 2000

export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {new Array(numStars).fill(1).map((_, index) => {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const size = Math.random() * 5
        return (
          <div
            className="animate-pulse bg-yellow-50 rounded-full absolute"
            key={index}
            style={{
              animationDelay: `${index * (animationDuration / numStars)}ms`,
              animationDuration: `${animationDuration}ms`,
              height: size,
              left: `${x}%`,
              opacity: `${50 - y}%`,
              top: `${y}%`,
              width: size,
            }}
          />
        )
      })}
    </div>
  )
}
