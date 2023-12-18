import resume from "../static/Ronard's_Resume.pdf"
function Header(){
    return <div> 
        <nav style={{display:"flex", justifyContent:"space-around", alignItems:"center" , paddingTop:"3rem",marginBottom:'3rem', transition: "all 400ms"}}>
            <a href="#about" id="navlink">About</a> <a href="#skills" id="navlink"> Skills</a> <a href="#projects" id="navlink">Projects</a> <a href="#contact" id="navlink">Contact</a>
            <a  href={resume} target="_blank" > <button className="cvbutton"> Resume</button></a>
       </nav>
        <div style={{margin:"0px auto"}}>
        <h1>Ronard Nyongkah</h1>
        <h3>Software Engineer</h3>
        </div>
     </div>
}

export default Header;