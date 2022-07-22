import pokemon from '../../assets/pokemon.json' ////////////????????????
import Menu from '../Menu/Menu';

function PokemonTable() {
    return (
    <div className='backgroundPokemonTableDiv'>
      <h1 className='backgroundPokemonTable'>
        Pokemon Table
      </h1>
      <Menu />
      <table className='backgroundPokemonTableTable'>
        <thead>
          <tr>
            <th className='backroundTh'>
              Name
            </th>
            <th className='backroundTh'>
              Type
            </th>
          </tr>
        </thead>
        <tbody className='backroundTbody'>
          {/* переключаемся на JS */}
          {pokemon.map((onepokemon) => (
            //это уже HTML
            <tr>
            <td>
              {/* мы снова переключаемся на JS */}
              {onepokemon.name.english}
            </td>
            <td>
              {/* мы снова переключаемся на JS */}
              {onepokemon.type.join(", ")}
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PokemonTable;