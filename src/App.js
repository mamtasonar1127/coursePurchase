import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

export default class App extends React.Component{

  render()
  {
      var courses = [
        {name:'Complete IOS', price: 199},
        {name:'Complete Python', price: 233},
        {name:'Complete React', price: 250},
        {name:'Complete Data Science', price: 299}
        
      ];
      return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Sales</h2>
          <Coursesales items={courses}/>
        </header> 
      </div>
      )
  }
  
  }

