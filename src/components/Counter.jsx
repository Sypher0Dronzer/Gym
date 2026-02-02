import { useEffect, useRef, useState } from "react";

const CounterItem = ({ value, label, duration = 2000, currency = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  //   const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);

          let start = 0;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-lime">
        {currency ? currency + count : count}+
      </h2>
      <p className="mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="w-full py-16 bg- text-violet-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <CounterItem value={1250} label="Total Members" />
          <CounterItem value={3200} label="Classes Completed" />
          <CounterItem value={15} label="Personal Trainers" />
          <CounterItem value={320} label="Success Stories" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
