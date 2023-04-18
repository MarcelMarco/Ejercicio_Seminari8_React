import { ListFormat } from "typescript"
import { Sub } from "../types"
import axios from "axios"

interface Props {
    subs: Array<Sub>
}

// componentDidMount() {
//   axios.get('http://localhost:5000/api/items')
//     .then(response => {
//       this.setState({ items: response.data });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

const List= ({subs}: Props) => {

    const renderList = (): JSX.Element[] => {
        return subs.map(sub => {
            return(
              <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
              <h4>{sub.money}</h4>
              <h4>{sub.fav_cientifico}</h4>
            </li>
            )
          })
    }


    return(
        <ul>
          {renderList()}
        </ul>
    )
}

export default List

function componentDidMount() {
  throw new Error("Function not implemented.")
}
