function navbar() {
    let navdiv = document.createElement("div")
    navdiv.setAttribute('id', 'mob-nav')
    navdiv.innerHTML = "<img src='./assets/Pakim-logo2.png' alt='logo here'><i id='cross' class='fa-solid fa-xmark'></i> <div id='line'></div><br><br><br><br><ul><div><li><a href='./index.html'>Home</a></li></div><div><li><a href='./generate.html'>Generate Colors</a></li></div><div><li><a href='./HOWitwork.html'>How it Works?</a></li></div><div><li><a href='./about.html'>About Us</a></li></div> </ul>   <div id='mob-bottom'><ul><div id='mob-botli'><li><a href='#'>Sign Up</a></li></div><div id='mob-botli'><li><a href='#'>Login</a></li></div></ul></div>  "
    let body = document.body
    body.appendChild(navdiv);
    document.body.style.overflow = 'hidden'

    setTimeout(function () {
        navdiv.classList.add('active')
    }, 10)

    let corss = document.querySelector('#cross').addEventListener('click', function () {
        document.body.style.overflow = 'scroll'
        navdiv.classList.remove('active')
        setTimeout(function () {
            document.body.removeChild(navdiv)
        }, 500)
    })
}

var loginuser = JSON.parse(localStorage.getItem('loginuser'))
var welcomename1 = loginuser.firstname
var welcomename2 = loginuser.lastname

document.querySelector("#h1main").textContent = `WELCOME TO MR. ${welcomename1} ${welcomename2}`

const postui = `
            <img src="./assets/nature.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card’s content.</p>
            </div>
            <div class="card-body post-footer">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div style="margin-bottom: 20px;">`

function toggleLike() {
    const likeCounter = document.querySelector('.like-counter')
    const likebtn = document.querySelector('like-icon')
    var counter = likeCounter.textContent 

    if(likebtn.classList.contains('liked')){
        likebtn.classList.remove('liked')
        counter = counter--
        likeCounter.textContent = counter
    }
    else{
        likebtn.classList.add('liked')
        counter = counter++
        likeCounter.textContent = counter
    }
}

function postloader(result) {
    const allposts = JSON.parse(localStorage.getItem('allposts')) || []

    const modifiedjobs = allposts.map(function (postdetails) {
        return `
                <img src="${postdetails.posturl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${postdetails.posttitle}</h5>
                <p class="card-text">${postdetails.postdiscription}</p>
            </div>
            <div class="card-body post-footer">
                <div class="post-actions">
                   <i class="fa-regular fa-heart like-icon" onclick="toggleLike()"></i>
                   <span class="like-counter">0</span>
               </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div style="margin-bottom: 20px;">`
    })

    console.log(modifiedjobs)
    var result1 = modifiedjobs
    if(result){
       result1 = result
    }
    const allpostui = document.querySelector(".mycard")
    allpostui.innerHTML = result1.join("")
}
postloader()


function search(){
    var search = document.querySelector('#search').value
    const searchjobs = allposts.find(function (postdetails) {
        return postdetails.posttitle == search
    })   
    postloader(searchjobs)
}

