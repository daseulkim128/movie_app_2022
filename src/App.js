import PropTypes from "prop-types";

function Food({name, image}){
 return (
          <div>
              <h1>i love {name}</h1>
              <img src={image} alt={name}/>   
          </div>
        )
}

const foods = [
  { id : 1, name : "kimchi1", image : "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg"},
  { id : 2, name : "kimchi2", image : "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg"},
  { id : 3, name : "kimchi3", image : "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg"}
];

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired
}


function App() {
  return (
    <div className="App">
      {foods.map(food=>(
        <Food key={food.id} name={food.name} image={food.image}/>
      ))}
    </div>
  );
}

export default App;
