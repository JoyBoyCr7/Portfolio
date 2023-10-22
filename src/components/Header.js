import resume from "../static/RonardResume.pdf"
function Header(){
    return <div style={{display:"flex", justifyContent:"space-between", paddingTop:"4rem",}}> 
        <div style={{margin:"0px auto"}}>
        <h1>Ronard Nyongkah</h1>
        <h3>Software Engineer</h3>
        </div>
        <nav style={{display:"flex", justifyContent:"center", alignItems:"center" , marginRight:"3rem", gap:"3rem", transition: "all 400ms"}}>
            <a href="#about" id="navlink">About</a> <a href="#skills" id="navlink"> Skills</a> <a href="#projects" id="navlink">Projects</a> <a href="#contact" id="navlink">Contact</a>
            <a  href={resume} target="_blank" > <button className="cvbutton"> Resume</button></a>
       </nav>
     </div>
}

export default Header;