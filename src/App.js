import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon.json'

console.log(pokemon)
//structure pokemon = [{-},]

function App() {
  return (
    <div >
      <h1>Pokemon Table</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
        <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {/*switch to JS*/}
        {pokemon.map((onepokemon)=>(
          //this is HTML
          <tr>
            <td>
                {/*swith to JS */}
                {onepokemon.name.english}
            </td>
            <td>
                {onepokemon.type.join(", ")}
            </td>
        </tr>
      ))
      }
      </tbody>
    </table>
    </div>
  );
}

export default App;
