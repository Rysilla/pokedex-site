import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const SmallCard = ({name, url}) => {
    
  const cardStyle = {
    backgroundColor: "white",
    height: "20rem",
    width: "20rem",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  //parsing name
  const [finalName, setFinalName] = useState('-')
    function capitalize() {
        var letter = name.charAt(0).toUpperCase()

        var temp = name.split("");
        var newName;
        for (var i = 0 ; i < temp.length; i ++) {
            if (i == 0) {
                newName = letter
            } else {
                newName = newName + temp[i]
            }
        }
        setFinalName(newName)
    }   

    //parsing id number
    const [imageUrl, setImageUrl] = useState("")
    const [id, setId] = useState("-")
    function parseId() {
      var result = url.split("/")
      result = result[6]
      if (result.length == 1) {
          result = "0" + "0" + result
      } else if (result.length == 2 ) {
          result = "0" + result
      } else if (result.length == 3 ) {
      } 
          setImageUrl(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${result}.png`)
          setId(result);
    }

    //loading types
    const [type, setType] = useState("-")
    async function loadType() {
        var result = await axios.get(url)
        console.log("Type found is " + result.data.types[0].type.name)
        setType(result.data.types[0].type.name)
    }


  useEffect(() => {
    capitalize();
    parseId();
    loadType();
    console.log (finalName)
  }, [])
  return (
    <Grid style={cardStyle}>
        <Grid sx={{ width: "200px", height: "200px", borderRadius: "10px"}}>
          <img width="200px" src={imageUrl}/>
        </Grid>
        <Typography sx={{fontWeight: 'bold', fontSize: "1.5rem"}}>{finalName}</Typography>
        <Typography>{id}</Typography>
        <Typography>{type}</Typography>
    </Grid>
  ) 
};

export default SmallCard;
