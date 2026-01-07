const title = "Bonjour les Amours !"
const style = { color: "red", backgroundColor: "yellow" }

function App() {
  return <>
            <h1 id="title" className="title" style={style}>{title}</h1>  
            
            <input type="text" placeholder="Me voiciii !!!" />
            
            <p> En plein tuto, ma fille souhaite que je la récupère. </p>
            <p> Pourtant je débute à peine l'exercice. Que faire !?</p>
          </>
}

export default App
