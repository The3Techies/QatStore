import { useEffect, useState } from "react";
import dummyData from "./dummyData";

const ProductList = () => {
  const [photos, setPhotos] = useState()

  useEffect(()=>{
    //get data from API
    setPhotos(dummyData)
  }, [])

  console.log(photos)

  return (
    <div>
      Hello
    </div>
  );
}

export default ProductList;
