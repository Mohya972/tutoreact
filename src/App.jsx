const title = "Bonjour les Amours !";
const style = { color: "red", backgroundColor: "yellow" };
const showTitle = true;
const todos = [
  'Présenter React',
  'Présenter JSX',
  'Créer des composants'
];

function App() {

  return <>
            {showTitle ? 
              <h1 id="title" className="title" style={style}>{title}</h1> : 
              <p>Démo</p>  
            }  
            <input type="text" placeholder="Me voiciii !!!" />
            
            <p> En plein tuto, ma fille souhaite que je la récupère. </p>
            <p> Pourtant je débute à peine l'exercice. Que faire !?</p>
            <ul>
              {todos.map(todo => (
                <li key={todo}> {todo} </li>
              ))}
            </ul>
          </>
}

export default App;
