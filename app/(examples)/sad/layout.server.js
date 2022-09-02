const SadLayout = ({ children }) => {
  return (
    <>
      <p>Sad Path</p>
      <div style={{ textAlign: "center" }}>{children}</div>
    </>
  );
};

export default SadLayout;
