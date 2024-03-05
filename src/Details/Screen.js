import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import DetailedView from "./DetailedView";
import { click } from "@testing-library/user-event/dist/click";

const Screen = ({searchWord, sortWord}) => {
  const screenStyle = {
    backgroundColor: "#EEEDEB",
    height: "80%",
    width: "98%",
    marginTop: "1rem",
    borderRadius: "10px",
    borderColor: "grey.500",
    border: ".25rem solid",
    display: "flex",
    flexDirection: "column"
  };

  const cardContainer = {
    height: "100%",
    width: "98%",
    paddingTop: "1rem", 
    display: "flex",
    flexFlow: "row wrap",
    columnGap: '1rem',
    rowGap: "1rem",
    justifyContent: "center",
    overflow: 'auto',
    marginLeft: "1rem",
    marginRight: "1rem"
  }

  const loadContainerStyle = {
    width: "100%",
    height: "10%"
  }

const [pokemonList, setPokemonList] = useState([])

async function loadInitial() {
  //this loads initial pokemon
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
  console.log(result.data)
  setPokemonList(result.data.results)
  console.log("pokelist")
  console.log(pokemonList)
}

const [cardLimit, setCardLimit] = useState(10)

async function loadAgain() {
  console.log("Limit: " + cardLimit)
  setCardLimit(cardLimit + 10)
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${cardLimit}`)
  setPokemonList(result.data.results)
}

const [clickedPokemon, setClickedPokemon] = useState();
function cardClicked(pokemon) {
  setListViewable(false)
  setClickedPokemon(pokemon)
}

function parseId(url) {
  var result = url.split("/")
  result = result[6]
  if (result.length == 1) {
      result = "0" + "0" + result
  } else if (result.length == 2 ) {
      result = "0" + result
  } else if (result.length == 3 ) {
  } 
  return result
}

function backToList() {
  setListViewable(true)
}

useEffect(() => {
  loadInitial()
}, [])

const [listViewable, setListViewable] = useState (true)

//searching
const [word, setWord] = useState(searchWord)

//sorting
const [sort, setSort] = useState(sortWord)

function checkWord(pokemon, word) {

  console.log("Checkword")
  console.log(pokemon)
  word = word.toLowerCase();

  if (word.length === 0) {
    console.log("Word is: " + word)
    return true;
  } else if (pokemon.name === word) {
    console.log("Match found " + pokemon.name)
    return true;
  } else if (parseId(pokemon.url) === word) {
    console.log("id is " + pokemon.id)
    return true;
  } else {
    return false
  }
}

//for sorting
// employees.sort((a, b) => {
//   return a.age - b.age;
// });

function sortByName() {
  pokemonList.sort((a, b) => {
    if (a < b) {
      return - 1;
    }
    if (a > b) {
      return 1
    }
    return 0
  })
}

useEffect(() => {
  if (sort === "byName") {
    sortByName()
  }
}, [sortWord])

return (
  <Grid style={screenStyle}>
    {/* <Typography>hi : {searchWord}</Typography> */}
    {
      listViewable ?
      (
      <Grid style={cardContainer}>
      {
        pokemonList.length > 0 ?
        (
          pokemonList.map((pokemon, i) => (
            checkWord(pokemon, searchWord) && (
              <a onClick={() => cardClicked(pokemon)}>
                <SmallCard key={i} name={pokemon.name} url={pokemon.url}/>  
              </a>
            )

          ))
        ):
        (
          <Typography>Loading</Typography>
        )
      }
        <Grid style={loadContainerStyle}>
          {
            searchWord === "" ? 
            <Button variant="contained" onClick={loadAgain} style={{backgroundColor: "green"}}>Load More</Button> :<></>
          }
          
        </Grid>
       </Grid>
      ) :
      (
        <Grid sx={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <DetailedView backFunction={backToList} clickedPokemon={clickedPokemon}/>
        </Grid>
      )
    }
    
    
    
  </Grid>
) 
};

export default Screen;
