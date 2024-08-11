import { useState, useEffect } from 'react';

import './App.css';
import Spinner from './components/Spinner';
import NoData from './components/NoData';
import Card from './components/Card';


const URL = 'https://fakestoreapi.com/products';

function App() {
const [posts, setPosts] = useState([]);

const [dataIsLoaded, setDataIsLoaded] = useState(false)

useEffect(() => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    setPosts(data)
    
    console.log(data)
    setDataIsLoaded(true);
  })
}, [])

if (!dataIsLoaded) {
  return (
    <div className="h-96 py-80 flex justify-center items-center"><Spinner /></div>
  )
}
if (posts.length === 0) {
  return (<div className="h-96 py-80"><NoData /></div>)
}
return (
    <>
    <div className="bg-[#E3E6E6] py-10 flex flex-wrap justify-center">
    {posts.map(post => (
        <Card key={post.id} title={post.title} category={post.category} price={post.price} rating={post.rating.rate} image={post.image}/>))
        }
    </div>
  
    </>
  )
}

export default App
