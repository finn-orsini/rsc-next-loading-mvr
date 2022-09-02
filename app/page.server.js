export default function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>RSC / Layouts Loading Examples </h3>
      <p> Description </p>
      <p>
        Each path has nested layouts which use artificial delays to simulate a
        server component waiting for data fetch. Each path includes multiple
        delay options for 1, 5 and 10 seconds.
      </p>
      <p>Happy Path</p>
      <ul>
        <li>loading.js used</li>
        <li>Initial page load streams content</li>
      </ul>
      <p>Sad Path</p>
      <ul>
        <li>loading.js not used</li>
        <li>
          Initial page load waits for delay, does not stream rest of page first
        </li>
        <li>No client or server side logs indicating incorrect setup</li>
      </ul>
    </div>
  );
}
