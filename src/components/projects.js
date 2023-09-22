
function Projects(){
    return <div className='projects'>
        <div>
            <img src={require('../images/pthree.png')}/>
            <p>The Cheeseapp project was created to demonstrate my ability to use React. It also incourperates full CRUD (Create, Read, Update, Delete) functionality.</p>
            <a href='https://cheese-frontend-zeta.vercel.app/'>Visit this project</a>
        </div>
        <div>
            <img src={require('../images/pone.png')}/>
            <p>The NBA Trivia app was created to test the user's knowlendge of basketball history. JQuery was the main tool used to create this project. </p>
            <a href='https://sportsflash.onrender.com/'>Visit this project</a>
            </div>
    </div>
}

export default Projects