import { Typography } from "@mui/material";



const WeaknessView = ({type}) => {

    console.log("received weakness: " + type)
    var weakList = [];

    if (type == "normal") {
        weakList.push("Rock", "Ghost", "Steel")
    } else if (type == "grass") {
        weakList.push("Flying, Poison, Bug, Steel, Fire, Grass, Dragon")
    } else if (type == "fighting" ) {
        weakList.push("Flying, Poison, Psychic, Bug, Ghost, Fairy")
    } else if (type == "fighting") {
        weakList.push("Rock, Steel, Electric	")
    } else if (type == "poison") {
        weakList.push("Poison, Ground, Rock, Ghost, Steel	")
    } else if (type == "ground") {
        weakList.push("Flying, Bug, Grass	")
    } else if (type == "rock" ) {
        weakList.push("Fighting, Ground, Steel	")
    } else if (type == "bug" ) {
        weakList.push("Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy	")
    } else if (type == "ghost" ) {
        weakList.push("Normal, Dark	")
    } else if (type == "steel" ) {
        weakList.push("Steel, Fire, Water, Electric	")
    } else if (type == "fire") {
        weakList.push("Rock, Fire, Water, Dragon	")
    } else if (type == "water") {
        weakList.push("Water, Grass, Dragon	")
    } else if (type == "electric") {
        weakList.push("Ground, Grass, Electric, Dragon	")
    } else if (type == "psychic") {
        weakList.push("Steel, Psychic, Dark	")
    }  else if (type == "ice") {
        weakList.push("Steel, Fire, Water, Ice	")
    }   else if (type == "dragon") {
        weakList.push("Steel, Fairy	")
    }   else if (type == "dark") {
        weakList.push("Fighting, Dark, Fairy		")
    } else if (type == "fairy") {
        weakList.push("Poison, Steel, Fire	")
    } 
    
    console.log("Printing weaklnesses")
    console.log(weakList)

    return (
        weakList.map((elem, i) => (
            <Typography key={i} sx={{fontSize: "1rem"}}>{elem}</Typography>
        ))
    )

}

export default WeaknessView