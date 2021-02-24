export const goToSlashScreen = (history) => {
    history.push('/')
}


export const goToLoginPage = (history) => {
    history.push('/login')
}


export const logout = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
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
