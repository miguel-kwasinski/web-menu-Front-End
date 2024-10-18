import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './Hooks/useFoodData';
import { Createmodal } from './components/create-modal/create-modal';
function App() {

  const { data }  = useFoodData();
  const [isModalOpen,setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
      <div className="Container">
        <h1>Menu</h1>
        <div className="Card-grid">
            {data?.map(foodData => 
              <Card 
              price={foodData.price} 
              title={foodData.title}
              image={foodData.image} />
            )}
        </div>
        {isModalOpen && <Createmodal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>New</button>
      </div>
  )
}

export default App
