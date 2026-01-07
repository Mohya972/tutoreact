const title = "Bonjour les Amours !";
const style = { color: "red", backgroundColor: "yellow" };

function App() {

  const handleClic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    alert("J'ai cliqué sur le titre !")
  };

  return <>
            <h1 id="title" className="title" style={style} onClick={handleClic}>{title}</h1>  
            <input type="text" placeholder="Me voiciii !!!" />
            
            <p> En plein tuto, ma fille souhaite que je la récupère. </p>
            <p> Pourtant je débute à peine l'exercice. Que faire !?</p>
          </>
}

export default App;
