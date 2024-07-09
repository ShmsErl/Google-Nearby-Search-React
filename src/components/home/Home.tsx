import React from 'react'
import SearchForm from '../searchbar/SearchForm'
import "./home.css";
import Shape from './Shape';
type Props = {}

const Home = (props: Props) => {
  return (
    <section className="home container-fluid" id="home">
      
    <SearchForm/>
    <Shape />
  </section>
  )
}

export default Home