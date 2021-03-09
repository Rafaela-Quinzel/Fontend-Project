import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'


export default function useUnProtectedPage() {

    const history = useHistory()
    
    const token = localStorage.getItem("accessToken")

    useEffect(() => {
        if (token) {
            goToHome(history)
        }
    }, [history, token])
}