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

var userinfos = JSON.parse(localStorage.getItem('userinfos'))
if (!userinfos) {
    window.location = 'signup1.html'
}

const allposts = JSON.parse(localStorage.getItem('allposts')) || []
var loginuser = JSON.parse(localStorage.getItem('loginuser'))
var welcomename1 = loginuser.firstname
var welcomename2 = loginuser.lastname

document.querySelector("#h1main").textContent = `WELCOME TO MR. ${welcomename1} ${welcomename2}`

function uploadpost() {
    const posturl = document.querySelector("#post-url").value
    const posttitle = document.querySelector("#post-title").value
    const postdiscription = document.querySelector("#post-discription").value

    const checkemail = JSON.parse(localStorage.getItem('loginuser'))
    checkemail.email1
    localStorage.setItem('checkemail' , JSON.stringify(checkemail.email1))
    const postdetails = {
        posturl: posturl,
        posttitle: posttitle,
        postdiscription: postdiscription
    }
    console.log(postdetails)

    allposts.push(postdetails)
    localStorage.setItem("allposts", JSON.stringify(allposts))
}


