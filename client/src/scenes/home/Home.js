import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import Subscribe from './Subscribe.js';

const Home = ()=>{
    return (
        <div className='home'>
            <MainCarousel/>
            <ShoppingList/>
            <Subscribe/>
        </div>
    )
}

export default Home;