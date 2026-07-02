
function Header({name}){
    return (
        <h1 style={{backgroundColor:"gray", color:"white"}} >{name}, This is Header of the Website.</h1>
    )}

function Main({user}){
    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3 >{user.age>18? "Your are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </> 
    )}

function Footer(){
    return (
        <h3 style={{backgroundColor:"gray", color:"white"}} >Thansk for visiting our website</h3>
    )}

function App(){
    return (
        <>
       <Header name="Rohit"></Header>
       <Main user={{name:"Arpit Verma",age:30,city:"CHD"}}></Main>
       <Footer />
       </>
    )}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);