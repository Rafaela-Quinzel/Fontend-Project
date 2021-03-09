export const goToSplashScreen = (history) => {
    history.push('/')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToHome = (history) => {
    history.push('/pagina-principal')
}

export const goToMusicsFeed = (history) => {
    history.push('/playlist-musicas')
}

export const goToAddMusics = (history) => {
    history.push('/adicionar-musicas')
}

export const logout = (history) => {
    if (window.confirm('Você tem certeza que deseja sair :( ?')) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("username")
        history.push('/login')
    }
}

export const goBack = (history) => {
    history.goBack()
}

