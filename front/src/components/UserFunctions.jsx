import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:5000/register', {
            role: newUser.role,
            email: newUser.email,
            password: newUser.password,
            freelancerId: newUser.freelancerId
        })
        .then(response => {
            console.log('Registered')
        })

}

export const login = user => {
    return axios
        .post('http://localhost:5000/login', {
            role: user.role,
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data !== 'user doesnt exist') {
                localStorage.setItem('usertoken', response.data)
            }
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}