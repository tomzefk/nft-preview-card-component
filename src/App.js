import './App.css';
import nftImage from './images/nfts/image-equilibrium.jpg';
import viewIcon from './images/icons/icon-view.svg';
import ethIcon from './images/icons/icon-ethereum.svg';
import clockIcon from './images/icons/icon-clock.svg';
import creatorImage from './images/users/image-avatar.png';


function App() {
  return (
    <div className="App">
      <div className='nftWrapper'>
        <div className='imageWrapper'>
          <img className='nftImage' src={nftImage}></img>
          <img className='viewIcon' src={viewIcon}></img>
        </div>
        <div className='info'>
          <h1 className='title'>Equilibrium #3429</h1>
          <p className='text'>Our Equilibrium collection promotes balance and calm.</p>
          <div className='nftInfo'>
            <div className='meta'>
              <div className='price'>
                <img src={ethIcon}></img>
                <h4>0.041 ETH</h4>
              </div>
              <div className='timeleft'>
                <img src={clockIcon}></img>
                <h4>3 days left</h4>
              </div>
            </div>
            <div className='creator'>
              <img src={creatorImage}></img>
              <p>Creation of <span>Jules Wyvern</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
