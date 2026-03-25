function HeroSection() {
    const appName = "OptiTask";
    const slogan = "Your Task. Our Robot. Done.";
    const description = "Book a humanoid robot for help moving, lifting, setup, and more.";
    const buttonText = "Request a Robot";
    const availability = "Robots available in your area";
    const startingPrice = "$49";

    return (
        <div>
            <h1>{appName}</h1>
            <p>{slogan}</p>
            <p>{description}</p>
            <button>{buttonText}</button>
            <p>{availability}</p>
            <p>Starting at {startingPrice}</p>
            <p>Fast Booking. Real-Time Tracking. Premium Robotic Labor</p>
        </div>
    );
}
export default HeroSection;