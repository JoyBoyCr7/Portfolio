import resume from "../static/Resume.pdf"
function Header(){
    return <div style={{display:"flex", justifyContent:"center"}}> 
        <div style={{marginTop:"20px"}}>
        <h1>Ronard Nyongkah</h1>
        <h3>Software Engineer</h3>
        </div>
        <a href={resume} download="ronardResume" style={{display:"flex", alignItems:"center", marginLeft:"500px"}}>Ronard Nyongkah's Resume</a>
       
     </div>
    
}


export default Header;