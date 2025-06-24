import './homework.css';

function Name({name}) {

    return (
        <>
            <h1>hello {name}!</h1>
        </>
    )};

function Email({email}) {
        return (
        <>
            <h3>your Email: {email}</h3>
        </>
    )};

function Homework() {

        return (
        <>
            <div className="container">
            <Name name="Your Name"/>
            <Email email="YourName@gmail.com"/>
            </div>
        </>
    )};

export default Homework;

