import "./App.css";
import { Box, Grid, IconButton, TextField, Tooltip } from "@mui/material";
import LightIcon from "./Details/LightIcon";
import Screen from "./Details/Screen";
import { shadows } from "@mui/system";
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import SearchIcon from '@mui/icons-material/Search';

function App() {
  const mainBody = {
    backgroundColor: "#B7E5B4",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const generalStyle = {
    backgroundColor: "#D24545",
    height: "95vh",
    width: "95vw",
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px",
    justifySelf: "center",
    alignItems: "center",
    borderColor: "#404040",
    borderBottom: ".25rem solid",
    borderLeft: ".2rem solid",
    borderRight: ".2rem solid",
  };

  const mainCircle = {
    height: "2.5rem",
    width: "2.5rem",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const miniCircle = {
    height: "2rem",
    width: "2rem",
    backgroundColor: "#6895D2",
    borderRadius: "50%",
  };

  const topBar = {
    height: "10%",
    width: "100.5%",
    backgroundColor: "#D04848",
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderColor: "#404040",
    border: ".2rem solid",
  };

  const [searchWord, setSearchWord] = useState("");

  const [radioValue, setRadioValue] = useState("")
  function handleRadioChange(val) {
    setRadioValue(val.target.value)
    console.log(val.target.value)
  }

  return (
    <div className="App">
      <Grid style={mainBody}>
        <Grid style={generalStyle}>
          <Grid style={topBar}>
            <span style={mainCircle}>
              <span style={miniCircle} />
            </span>
            <LightIcon color={"red"} />
            <LightIcon color={"yellow"} />
            <LightIcon color={"green"} />
              <Tooltip title="Click Search Icon to Search">
                <Box sx={{backgroundColor: "white", m: ".25rem", p: "1rem", display: "flex", alignItems: "center", borderRadius: "10px"}}>
                  
                  <TextField
                      sx={{
                          width: { sm: 200, md: 400 },
                          "& .MuiInputBase-root": {
                              height: 80
                          }
                      }}
                      id="search"
                      variant="standard"
                      placeholder="Search"
                      value={searchWord}
                      onChange={(e) => {
                        setSearchWord(e.target.value)
                        console.log(e.target.value)
                      }}
                  />
                  <IconButton>
                    <SearchIcon/>
                  </IconButton>
                </Box>
              </Tooltip>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={radioValue}
                onChange={handleRadioChange}
              >
                <FormControlLabel style={{color: "white", fontWeight: "bold"}} value="byId" control={<Radio style={{color: "white"}} />} label="Sort by ID"  />
                <FormControlLabel style={{color: "white", fontWeight: "bold"}} value="byName" control={<Radio style={{color: "white"}}/>} label="Sort by Name"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Screen searchWord={searchWord} sort={radioValue}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
