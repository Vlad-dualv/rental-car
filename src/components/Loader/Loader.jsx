import { PuffLoader } from "react-spinners";

export default function Loader() {
  const wrapperStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={wrapperStyle}>
      <PuffLoader
        color={"#3470ff"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
