let form = {
    login: document.querySelector('#inputLogin'),
    password: document.querySelector('#inputPassword'),
    btn: document.querySelector('#btnSign')
}

let user = {
    login: 'pomedor',
    password: 'pomedor123'
}

form.btn.addEventListener('click', () =>{
    let authStatus = 0
    if (form.login.value == user.login){
        authStatus += 1
    }
    if (form.password.value == user.password){
        authStatus += 1
    }
    if (authStatus == 2){
        alert("Auth has beensuccessfully")
        window.location.href = "./index.html"
    } else {
        alert("Auth has failed")
    }
})