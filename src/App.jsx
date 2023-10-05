import React, {useEffect, useState} from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Navbar from './components/Navbar';

function App() {
  const[images, setImages] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[term, setTerm] = useState('');
  const key = "39761635-404f05f84860cf0888f3ad96f"
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term]);

  return (
    <div className="container mx-auto">
    <Navbar />
    <ImageSearch searchText={(text) => setTerm(text)} />
    <div className="relative">
      {!images.length && !isLoading && (
        <div className="absolute text-3xl inset-0 flex items-center justify-center bg-red-50 dark:bg-gray-800 dark:text-red-400 text-red-800 rounded-lg p-7 " role="alert">          <span className="font-medium"> No Images Found! </span>
        </div>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading..</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  </div>
  
  )
}

export default App
