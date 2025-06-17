import { PuffLoader } from "react-spinners";

export default function Loader() {
  const loaderStyle = {
    display: "block",
    margin: "500px auto",
    borderColor: "#3470ff",
  };
  return (
    <PuffLoader
      color={"#3470ff"}
      cssOverride={loaderStyle}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
