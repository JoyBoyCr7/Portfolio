import resume from "../static/Resume.pdf"
function Header(){
    return <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}> 
        <div style={{margin:"0px auto"}}>
        <h1>Ronard Nyongkah</h1>
        <h3>Software Engineer</h3>
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", marginRight:"3rem"}}>
            <a  href={resume} download="Ronard Nyongkah Resume" ><button className="cvbutton"  >Download CV</button></a>
       </div>
     </div>
}


export default Header;