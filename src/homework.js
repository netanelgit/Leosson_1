import logo from './logo.svg';
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
            <h1>Homework</h1>
            <Name name="Your Name"/>
            <Email email="YourName@gmail.com"/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>look the repo <a href={"https://github.com/netanelgit/Leosson_1"} >Follow the link</a></p>
            </div>
        </>
    )};

export default Homework;

