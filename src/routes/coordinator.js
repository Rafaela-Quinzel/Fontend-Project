export const goToSlashScreen = (history) => {
    history.push('/')
}


export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUp =(history)=>{
    history.push('/cadastro')
}

export const goToHomePage =(history)=> {
    history.push('/pagina-principal')
}

export const logout = (history) => {
    if (window.confirm('Você tem certeza que deseja sair :( ?')) {
        localStorage.removeItem('token')
        history.push('/login')
    }
}

export const logoutProfile = (history) => {
    if (window.confirm('Você tem certeza que deseja sair :( ?')) {
        localStorage.removeItem('token')
        history.push('/login')
    }
}

export const goBack = (history) => {
    history.goBack()
}
