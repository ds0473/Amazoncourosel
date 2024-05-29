import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './One'
import Two from './Two'
import Three from './Three'


const amazon_prime_images = [
  "./amazonprimeimages/amazonimage_1.jpg",
  "./amazonprimeimages/amazonimage_2.jpg",
  "./amazonprimeimages/amazonimage_3.jpg",
  "./amazonprimeimages/amazonimage_4.jpg",
  "./amazonprimeimages/amazonimage_5.jpg",
  "./amazonprimeimages/amazonimage_6.jpg",
  "./amazonprimeimages/amazonimage_7.jpg",
  "./amazonprimeimages/amazonimage_8.jpg"
];

function App() {
  return (
    <>
     
   {/* <One amazon_imgs = {amazon_prime_images}/>  */}
    { /*<Two amazon_imgs = {amazon_prime_images}/> */}
    <Three amazon_imgs = {amazon_prime_images}/> 
    </>
  )
}
export default App
