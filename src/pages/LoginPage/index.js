import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Link style={styles.btnTxt} to= {{screen: 'DashboardPage'}}>Login</Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link style={styles.links} to={{screen: 'ForgotPasswordPage'}}>Esqueceu a senha? </Link>
                <Link style={styles.links} to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}