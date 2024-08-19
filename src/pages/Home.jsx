import { useState, useEffect } from 'react';

import Spinner from '../components/Spinner'
import NoData from '../components/NoData';
import Card from '../components/Card';
import Navbar from "../components/Navbar";

const URL = 'https://fakestoreapi.com/products';
// const URL = 'https://fake-store-api.mock.beeceptor.com/api/products';

const Home = function() {
const [posts, setPosts] = useState([]);

const [dataIsLoaded, setDataIsLoaded] = useState(false);

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
    <div className="h-screen flex justify-center items-center"><Spinner /></div>
  )
}
if (posts.length === 0) {
  return (<div className="h-screen flex justify-center items-center"><NoData /></div>)
}

    return (
        <div className='bg-gray-200'>
        <Navbar />
        <div className='mt-4 grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3 2xl:grid-cols-4'>
        {posts.map(post => (
              <Card key={post.id} title={post.title} category={post.category} price={post.price} rating={post.rating.rate} image={post.image}/>))
              }
        </div>
        </div>
    )
}

export default Home;