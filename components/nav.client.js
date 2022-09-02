import Link from "next/link";

const Nav = () => (
  <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" }}>RSC Streaming Loading MVR</h2>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link href="/">Home</Link>
          <Link href="/happy">Happy Loading Path</Link>
          <Link href="/sad">Sad Path</Link>
        </div>
      </div>
    </div>
  </>
);

export default Nav;
