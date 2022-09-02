import durations from "../../../../util/durations";

export const getServerSideProps = async (context) => {
  const { duration } = context.params;

  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, durations[duration]));

  return {
    props: { wait: durations[duration] },
  };
};

export default function Page({ children, wait }) {
  return <p> Waited {wait / 1000} seconds</p>;
}
