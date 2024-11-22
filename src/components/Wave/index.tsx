import './wave.css';

export default function Wave({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <div className="wave">{children}</div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="none"
          strokeWidth="0"
          className="path-0"
          transform="rotate(-180 720 200)"
        />
        <path
          stroke="none"
          strokeWidth="0"
          className="path-1"
          transform="rotate(-180 720 200)"
        />
      </svg>
    </section>
  );
}
