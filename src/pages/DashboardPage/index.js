import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function DashboardPage(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem Vindo!!</Text>
            <Text style={styles.text}>Mensagem do dia</Text>
            <Text style={styles.text}>"Antes de dar comida a um mendigo, dá-lhe uma vara e ensina-lhe a pescar."</Text>
            
        <View style={styles.viewLinks}>
            <Image style={styles.imagem} source={require('../../../assets/bonfire.png')}/>
        </View>
        </View>
    )
}