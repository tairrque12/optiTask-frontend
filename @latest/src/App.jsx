function App(){
    const appName = `OptiTask MVP`;
    const slogan = `Your Task. Our Robot. Done.`;
    const description = `Book A Robot For Help Moving, Lifting, Setup, & More.`;
    const buttonText = `Book Now`;
    const availability = `Robots Are Available In Your Area`;
    const startingPrice = "49$";

    return(
        <div>
            <h1>{appName}</h1>
            <p>{slogan}</p>
            <p>{description}</p>
            <button>{buttonText}</button>
            <p>{availability}</p>
            <p>Starting At {startingPrice}</p>
        </div>
    );
        }

export default App; //This allows the main.jsx to import it.