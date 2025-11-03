function Greeting({name, onClick}){
    return (
        <button onClick={()=> onClick(name)}>Greet {name}</button>
    )
}

export default Greeting