import './App.css';
import Yelp from '../../utils/Yelp.js';

import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
*/
/*const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
]
*/

function App() {
  const [searchData, setsearchData] = useState([]);


  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(
      (data) => {
        setsearchData(data);
      }
    )
  }

  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={searchData} />

    </div>
  );
}

export default App;
