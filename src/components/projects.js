
function Projects(){
    return <div className='projects'>
        <div>
            <img src={require('../images/pthree.png')}/>
            <p>The Cheeseapp project was created to demonstrate my ability to use React. It also incorporates full CRUD (Create, Read, Update, Delete) functionality.</p>
            <p>Visit this <a href='https://cheese-frontend-zeta.vercel.app/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/projectpt2'> GitHub</a> </p>
        </div>
        <div>
            <img src={require('../images/pone.png')}/>
            <p>The NBA Trivia app was created to test the user's knowledge of basketball history. JQuery was the main tool used to create this application.</p>
            <p>Visit this <a href='https://sportsflash.onrender.com/'>project</a> and review the code on <a href='https://github.com/JoyBoyCr7/projectpt2'> GitHub</a> </p>
        </div>
    </div>
}

export default Projects