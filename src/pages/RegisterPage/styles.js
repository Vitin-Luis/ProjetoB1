import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '300px',
        height: '300px',
        marginBottom: '10px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'white',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid gold',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: 'black',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        border: '1px solid gold',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'gold'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
    },
    links:{
        color: 'gold'
    }
});

export default styles;