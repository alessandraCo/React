import './App.css';
import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import Card from './components/Card';
import data from './data';

/*
props: 
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
 */

function App() {
  const mappedData = data.map((elem) => {
    return <Card
      key={elem.id}   //always needed when using .map
      elem={elem}     //i can pass the entire item
      />
  });
  return (
    <>
      <header>
        <Navbar />
        <HeroComponent />
      </header>
      <div className='cardContainer'>
        {mappedData}
      </div>
    </>
  );
}

export default App;
