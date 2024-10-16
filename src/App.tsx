import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';

function App() {
  const data : FoodData[] = [];
  return (
      <div className="Container">
        <h1>Menu</h1>
        <div className="Card-Grid">
            {data.map(foodData => <Card price={foodData.price} title={foodData.title} image={foodData.image} />)}//+
        </div>
      </div>
  )
}

export default App
