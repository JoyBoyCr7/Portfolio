function Projects(){
    return <div id='projects' style={{marginTop:"4rem"}}>
        <h3>Projects</h3>
        <div className='allprojects' style={{width:"75%", margin:"0px auto", gridGap:"3rem"}}>
            <div className='project'>
                <img src={require('../images/Capstone.png')} alt='proimg' style={{borderRadius:"5%"}}/>
                <p>This app is an app that allows the user to keep track of the shows they have watched throughout their lives. It allows the user to document when they completed the show and rate the show on a scale of 1 to 5 stars.</p>
                <p>Skills used: JavaScript, TypeScript, React, HTML, CSS, Node, Mongo, Express, Vite, Material UI. </p>
                <p>Visit this <a href='https://top-rated-front.vercel.app/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/Top-RatedFront'> GitHub.</a> </p>
            </div>
            <div className='project'>
                <img src={require('../images/jobbyjob.png')} alt='proimg' style={{borderRadius:"5%"}}/>
                <p>This app is an app that allows the users to keep track of the jobs they may be appliying to. Users have the ability to give small descriptions of the jobs alongside interest level.</p>
                <p>Skills used: JavaScript, Python, Django, React, HTML, CSS, Node, PostgreSQL.</p>
                <p>Visit this <a href='https://jobby-job-front.vercel.app/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/Jobby_Job_front'> GitHub.</a> </p>
            </div>
            <div className='project'>
                <img src={require('../images/pthree.png')} alt='proimg' style={{borderRadius:"5%"}}/>
                <p>The Cheeseapp project was created to demonstrate my ability to use React. It also incorporates full CRUD (Create, Read, Update, Delete) functionality.</p>
                <p>Skills used:  JavaScript, React, HTML, CSS, Node, Mongo, Express.</p>
                <p>Visit this <a href='https://cheese-frontend-zeta.vercel.app/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/projectpt2'> GitHub.</a> </p>
            </div>
            <div className='project'>
                <img src={require('../images/pone.png')} alt='proimg' style={{borderRadius:"5%"}}/>
                <p>The NBA Trivia app was created to test the user's knowledge of basketball history. JQuery was the main tool used to create this application.</p>
                <p>Skills used:  JavaScript, HTML, CSS, Node, JQuery.</p>
                <p>Visit this <a href='https://sportsflash.onrender.com/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/projectpt2'> GitHub.</a> </p>
            </div>
        </div>
    </div>
}

export default Projects