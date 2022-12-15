const formDOM = document.querySelector('.form')
const usernameInputDOM = document.querySelector('.username-input')
const passwordInputDOM = document.querySelector('.password-input')
const modelInputDOM = document.querySelector('.model-input')
const insurerInputDOM = document.querySelector('.insurer-input')
const formAlertDOM = document.querySelector('.form-alert')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')


formDOM.addEventListener('submit', async(e) => {
    formAlertDOM.classList.remove('text-success')
    tokenDOM.classList.remove('text-success')

    e.preventDefault()
    const username = usernameInputDOM.value
    const password = passwordInputDOM.value
    const model = modelInputDOM.value
    const insurer = insurerInputDOM.value

    try {
        const { data } = await axios.post('http://localhost:3000/api/v1/users', { username, password, model, insurer })
        console.log(data)

        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = data.msg

        formAlertDOM.classList.add('text-success')
        usernameInputDOM.value = ''
        passwordInputDOM.value = ''

        localStorage.setItem('token', data)
        resultDOM.innerHTML = ''
        tokenDOM.textContent = 'token present'
        tokenDOM.classList.add('text-success')
    } catch (error) {
        console.log(error.data)
    }
})

btnDOM.addEventListener('click', async() => {
    const token = localStorage.getItem('token')
    try {
        const { data: { data } } = await axios.get('/api/v1/insurers', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(data)
        const { Insurer, Paint, Mechanical, Bodywork } = data

        resultDOM.innerHTML = `<table>
            <tr>
                <th><b>INSURER</b></th>
                <th><b>BODYWORK</b></th>
                <th><b>PAINT</b></th>
                <th><b>MECHANIC</b></th>
            </tr>
            <tr>
                <td>${Insurer}</td>
                <td>${Bodywork}</td>
                <td>${Paint}</td>
                <td>${Mechanical}</td>
            </tr>
        </table>`
        localStorage.removeItem('token')
        tokenDOM.textContent = 'no token present'
        tokenDOM.classList.remove('text-success')
            // data.secret
    } catch (error) {
        localStorage.removeItem('token')
        resultDOM.innerHTML = `<p>Please check the information you entered</p>`
    }
})

const checkToken = () => {
    tokenDOM.classList.remove('text-success')

    const token = localStorage.getItem('token')
    if (token) {
        tokenDOM.textContent = 'token present'
        tokenDOM.classList.add('text-success')
    }
}
checkToken()