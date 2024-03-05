import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./DataTable"
import WeaknessView from "./WeaknessView"
const DetailedView = ({backFunction, clickedPokemon}) => {

    const detailedViewStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        width: "95%",
        height: "95%",
        overflow: 'auto',
        display: "flex",
        flexDirection: "column"
    }

    const backBarStyle = {
        height: "10%",
        width: "100%",
        padding: "2rem",
        display: 'flex',
        flexDirection: "flex-start"
    }

    const contentStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }

    const labelStyle = {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#404040",
    }

    const labelGroup = {
        display: "flex", 
        flexDirection: "row",
        // borderColor: "#EEEDEB",
        // border: ".1rem solid",
        backgroundColor: "#FFE6E6",
        margin: ".5rem", 
        padding: ".5rem",
        borderRadius: "10px"
    }

    const infoPanelStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    }


    const [name, setName] = useState("")
    const [ID, setID] = useState("")
    const [type, setType] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")

    //stats
    const [hp, setHP] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [specialAttack, setSpecialAttack] = useState("")
    const [specialDefense, setSpecialDefense] = useState("")
    const [speed, setSpeed] = useState("")
 
    async function loadPokemon() {
        const result = await axios.get(clickedPokemon.url)
        console.log(result.data)

        setID(parseId(result.data.id))
        setType(result.data.types[0].type.name)
        setWeight(result.data.weight)
        setHeight(result.data.height)

        setHP(result.data.stats[0].base_stat)
        setAttack(result.data.stats[1].base_stat)
        setDefense(result.data.stats[2].base_stat)
        setSpecialAttack(result.data.stats[3].base_stat)
        setSpecialDefense(result.data.stats[4].base_stat)
        setSpeed(result.data.stats[5].base_stat)
    }

    const [imageUrl, setImageUrl] = useState("")
    const [id, setId] = useState("-")
    function parseId(num) {
      var result = String(num)
      if (result.length == 1) {
          result = "0" + "0" + result
      } else if (result.length == 2 ) {
          result = "0" + result
      } else if (result.length == 3 ) {
      } 
        setId(result);
        console.log("id is: " + result)
        setImageUrl(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${result}.png`)
        return result
    }

    function capitalize(nameToProcess) {
        var letter = nameToProcess.charAt(0).toUpperCase()
        var temp = name.split("");
        var newName;
        for (var i = 0 ; i < temp.length; i ++) {
            if (i == 0) {
                newName = letter
            } else {
                newName = newName + temp[i]
            }
        }
        return newName
    }   

    useEffect(() => {
        setName(clickedPokemon.name)
        loadPokemon()
    }, [clickedPokemon])

    return (
        <Grid lg={12} style={detailedViewStyle}>
            <Grid style={backBarStyle}>
                <IconButton>
                    <ArrowBackIcon onClick={backFunction}></ArrowBackIcon>
                </IconButton>
                
            </Grid>

            <Grid style={contentStyle}>
                <Grid lg={6} >
                    <Box sx={{height: "20rem", width: "20rem", backgroundColor: "grey", m: "1rem"}}>
                        <img width="100%" src={imageUrl}></img>
                    </Box>
                </Grid>
                <Grid lg={6} sx={{display: "flex", flexDirection: "column"}}>
                    <Grid sx={{display: "flex", flexDirection: "row"}} >
                            <Typography sx={{fontSize: "2rem", ml: "2.5rem", fontWeight: "bold", color: "#404040"}}>{capitalize(name)}</Typography>
                    </Grid>
                    <Grid lg={6} style={infoPanelStyle} sx={{ml: "2rem"}}>
                        <Grid style={labelGroup}>
                            <Typography style={labelStyle}>ID: </Typography>
                            <Typography sx={{fontSize: "1rem", ml: "1rem"}}>{ID}</Typography>
                        </Grid>
                        <Grid style={labelGroup}>
                            <Typography style={labelStyle}>Type: </Typography>
                            <Typography sx={{fontSize: "1rem", ml: "1rem"}}>{type}</Typography>
                        </Grid>
                        <Grid style={labelGroup}>
                            <Typography style={labelStyle}>Weight: </Typography>
                            <Typography sx={{fontSize: "1rem", ml: "1rem"}}>{weight}</Typography>
                        </Grid>
                        <Grid style={labelGroup}>
                            <Typography style={labelStyle}>Height: </Typography>
                            <Typography sx={{fontSize: "1rem", ml: "1rem"}}>{height}</Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography sx={{fontWeight: "bold", alignSelf: "flex-start", ml: "2.5rem", color: "#404040"}}>Stats</Typography> */}
                    <Grid sx={{ ml: "2.5rem"}}> 
                        <DataTable 
                            hp={hp}
                            attack={attack}
                            defense={defense}
                            specialAttack={specialAttack}
                            specialDefense={specialDefense}
                            speed={speed}
                        ></DataTable>
                    </Grid>
                    
                    <Typography sx={{fontWeight: "bold", fontSize: "1rem", mb: "1rem", color: "#404040"}}>
                        Weaknesses
                        <WeaknessView type={type}/>
                    </Typography>
                    
        
                </Grid>
                
            </Grid>

        </Grid>
    )

}

export default DetailedView;