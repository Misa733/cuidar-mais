import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2 style={styles.logo}>Your Logo</h2>
            <h3 style={styles.title}>Sign in to</h3>
            <p style={styles.subtitle}>Lorem Ipsum is simply</p>

            <p style={styles.switchText}>
                If you don't have an account register <br />
                You can{' '}
                <span style={styles.link} onClick={() => navigate('/register')}>
                    Register here !
                </span>
            </p>

            <InputField placeholder="Enter email or user name" />
            <InputField type="password" placeholder="Password" />

            <p style={styles.forgot}>Forgot password ?</p>

            <button style={styles.button} onClick={() => navigate('/home')}>
                Login
            </button>

            <p style={styles.or}>or continue with</p>

            <div style={styles.socialIcons}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                    style={styles.icon}
                    alt="facebook"
                />
                <img
                    src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
                    style={styles.icon}
                    alt="apple"
                />
                <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    style={styles.icon}
                    alt="google"
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '30px',
        fontFamily: 'sans-serif',
        textAlign: 'left',
        maxWidth: '480px',
        margin: '0 ',
    },
    logo: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '22px',
        fontWeight: '600',
    },
    subtitle: {
        marginBottom: '10px',
    },
    switchText: {
        fontSize: '13px',
        marginBottom: '20px',
    },
    link: {
        color: '#5b3de5',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    forgot: {
        fontSize: '12px',
        color: '#999',
        textAlign: 'right',
        marginBottom: '20px',
    },
    button: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#5b3de5',
        color: 'white',
        fontSize: '16px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(91, 61, 229, 0.4)',
    },
    or: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#aaa',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    icon: {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
    },
};

export default Login;
