import './App.css';
import Tooltip from './Tooltip.js'

const title = "<Unkle Tooltip Component>"

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className='card'>
        <h2>Link</h2>
        <Tooltip text='This is an awesome link with a very long and pointless text 
        just so that you can see text fit in the tooltip' type='link' position='left' width='200px'>
          <a href='/'>Hover Me!</a>
        </Tooltip>
        <label htmlFor='link-attributes'>Attributes:</label>
          <ul id='link-attributes' > 
            <li><strong>text: </strong>'This is an awesome link with a very long and pointless text 
        just so that you can see text fit in the tooltip'</li>
            <li><strong>type: </strong>'input'</li>
            <li><strong>position: </strong>'left'</li>
            <li><strong>width: </strong>'200px'</li>
          </ul>
      </div>
 
      <div className='card'>
      <h2>Input</h2>
        <Tooltip text='please type something' type='input' position='bottom' width='100px'>
          <input type='text' placeholder='Click Me!'></input>
        </Tooltip>
        <label htmlFor='input-attributes'>Attributes:</label>
        <ul id='input-attributes' > 
          <li><strong>text: </strong>'please type something'</li>
          <li><strong>type: </strong>'input'</li>
          <li><strong>position: </strong>'bottom'</li>
          <li><strong>width: </strong>'100px'</li>
        </ul>
      </div>

      <div className='card'>
      <h2>Button</h2>
        <Tooltip text='click to send' type='button' position='right' width='60px'>
          <button>Hover Me!</button>
        </Tooltip>
        <label htmlFor='button-attributes'>Attributes:</label>
        <ul id='button-attributes' > 
          <li><strong>text: </strong>'click to send'</li>
          <li><strong>type: </strong>'button'</li>
          <li><strong>position: </strong>'right'</li>
          <li><strong>width: </strong>'60px'</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
