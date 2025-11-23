let allposts = [];

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
var welcomename1 = loginuser ? loginuser.firstname : '';
var welcomename2 = loginuser ? loginuser.lastname : '';

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

function toggleLike(iconElement) {
    const likeCounter = iconElement.nextElementSibling;
    
    if (iconElement.classList.contains('liked')) {
        iconElement.classList.remove('liked');
        iconElement.classList.remove('fa-solid');
        iconElement.classList.add('fa-regular');
        likeCounter.textContent = '0';
        
    } else {
        iconElement.classList.add('liked');
        iconElement.classList.remove('fa-regular');
        iconElement.classList.add('fa-solid');
        likeCounter.textContent = '1';
    }
}
var checker1 = JSON.parse(localStorage.getItem('checkemail')) 
var checker2 = JSON.parse(localStorage.getItem('loginuser'))

var checker = ""
if(checker2.email1 != checker1){
   var checker = "active"
}
function createPostHTML(postdetails) {
    if (!postdetails) return '';
    
    return `
        <img src="${postdetails.posturl}" class="card-img-top" alt="...">
        <div style="margin-bottom: 20px; class="card-body">
            <h5 class="card-title">${postdetails.posttitle}</h5>
            <p class="card-text">${postdetails.postdiscription}</p>
        </div>
        <div class="card-body post-footer">
            <div class="post-actions">
                <i class="fa-regular fa-heart like-icon" onclick="toggleLike(this)"></i>
                <span class="like-counter">0</span>
            </div>
        <div class="dropdown ${checker}">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Edit Post</a></li>
                <li><a class="dropdown-item" href="#">Delete Post</a></li>
            </ul>
        </div>
        </div ">`;
}



function postloader() {
    allposts = JSON.parse(localStorage.getItem('allposts')) || [];
    renderPosts(allposts);
}

function renderPosts(posts) {
    const allpostui = document.querySelector(".mycard");
    
    if (posts.length === 0) {
        allpostui.innerHTML = '<h3 style="padding: 20px; color: #333333;">Not Found.</h3>';
        return;
    }
    
    const modifiedjobs = posts.map(createPostHTML);
    allpostui.innerHTML = modifiedjobs.join("");
}

postloader()


function search(){
    var searchInput = document.querySelector('#search').value.trim();
    
    const searchResult = allposts.find(function (postdetails) {
        return postdetails.posttitle.toLowerCase() === searchInput.toLowerCase();
    })   

    const allpostui = document.querySelector(".mycard");

    if (searchResult) {
        allpostui.innerHTML = createPostHTML(searchResult);
    } else {
        allpostui.innerHTML = '<h3 style="padding: 20px; color: #E74C3C;">Invalid Search Not found.</h3>';
    }
}