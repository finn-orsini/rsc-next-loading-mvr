import Link from "next/link";
import durations from "../util/durations";
import { useState } from "react";
import { usePathname } from "next/dist/client/components/hooks-client";

const SubNav = () => {
  const [count, setCount] = useState(0);

  const pathname = usePathname();

  // this is trash but I'm too lazy to fix it
  const basePath = pathname.includes("happy") ? "happy" : "sad";

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {Object.keys(durations).map((duration) => (
          <Link
            key={duration}
            className="subnav"
            href={`/${basePath}/${duration}`}
          >
            {duration}
          </Link>
        ))}
        <button onClick={() => setCount((curCount) => curCount + 1)}>
          Clicks: {count}
        </button>
      </div>
    </>
  );
};

export default SubNav;
