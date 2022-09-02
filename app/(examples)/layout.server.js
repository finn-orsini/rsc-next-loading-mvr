import SubNav from "../../components/sub-nav.client";

const ExamplesLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SubNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ExamplesLayout;
