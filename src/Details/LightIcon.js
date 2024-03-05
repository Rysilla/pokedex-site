import { Grid } from "@mui/material";

const LightIcon = ({ color }) => {
  const mainCircle = {
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: "#404040",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: ".2rem",
  };

  const miniCircle = {
    height: "1.25rem",
    width: "1.25rem",
    backgroundColor: color,
    borderRadius: "50%",
  };

  return (
    <Grid style={mainCircle}>
      <Grid style={miniCircle} />
    </Grid>
  );
};

export default LightIcon;
