import { useState } from 'react';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(new FormData(event.target));
  }

  return <form onSubmit={handleSubmit}>
            <input type="text" name="Firstname" defaultValue="Your Firstname"/>
            <button>Envoyer</button>
          </form>
}

export default App;
