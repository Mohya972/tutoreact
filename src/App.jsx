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
            <Title color="green"hidden> Mon composant </Title>
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

function Title({color , children, hidden}) {
  if (hidden) {
    return null;
  }
  return <h1 style={{ color: color }}>{children}</h1>
}

export default App;
