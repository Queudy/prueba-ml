import axios from 'axios';
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  let getItems = (site_id,seller_id) => {
    axios.get(`https://api.mercadolibre.com/sites/${site_id}/search?seller_id=${seller_id}`)
    .then(response => {
      setItems(response.data.results)
    })
  }

  return (
    <div className="App">
      <button onClick={() => getItems('MLA', 179571326)}>Ejecutar Script</button>
      <h2>Listado de productos del vendedor 179571326</h2>
      <ul>
        {
          items ?
          items.map(item => (<li>{item.id} | {item.title} | {item.category_id} | {item.name}</li>))
          : ''
        }
      </ul>
    </div>
  )
}

export default App
