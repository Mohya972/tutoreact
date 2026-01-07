const title = "Bonjour les <strong> Amours </strong> !"

function App() {
  return <>
            <h1 id="title" className="title" dangerouslySetInnerHTML={{__html: title}}></h1>  
            <p> En plein tuto, ma fille souhaite que je l'a récupère. </p>
            <p> Pourtant je débute à peine l'exercice. Que faire !?</p>
          </>
}

export default App
