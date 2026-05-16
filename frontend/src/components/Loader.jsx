import "../componentStyles/Loader.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
};

export default Loader;
