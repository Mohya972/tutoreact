import { useState } from 'react';

function App() {

const [firstname, setFirstname] = useState('John Doe');

const handleChange = (e) => {
  setFirstname(e.target.value);
}

const reset = () => {
  setFirstname('');
}

  return <form>
            <input type="text" name="Firstname" value={firstname} onChange={handleChange} />
            <p>Your firstname is: {firstname}</p>
            <button type="button" onClick={reset}>Reset</button>
          </form>
}

export default App;
