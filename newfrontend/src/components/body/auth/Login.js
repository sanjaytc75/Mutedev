import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { ImFacebook } from "react-icons/im";


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}


function Login() {
    
    const [user, setUser] = useState(initialState)
    const {email, password, err, success} = user
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            history.push("/")
        } 
        catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseFacebook = async (response) =>{
        console.log(response)
        try {
            const {accessToken, userID} = response
            const res = await axios.post('/user/facebook_login', {accessToken, userID})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div className="login_page">
            <h2>Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Enter email address" id="email"
                value={email} name="email" onChange={handleChangeInput} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password" id="password"
                value={password} name="password" onChange={handleChangeInput} />
            </div>
                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/forgot_password">Forgot your password?</Link>
                </div>
            </form>

            <div className="hr">Or Login With</div>
            
            <div className="social" >
                <GoogleLogin
                    clientId="102888899621-5dlohidn9r38q4nor9koqequ4p4dk6b7.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

                <FacebookLogin
                    appId="2434159946729010"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} 
                    icon={< ImFacebook/>}
                />
            </div>
            <p>New User? <Link to="/register">Register</Link></p>
        </div>
    )
}

export default Login
