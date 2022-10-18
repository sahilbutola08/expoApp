import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Register() {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Authenticate User</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Name" maxLength={20}/>
                <TextInput style={styles.textInput} placeholder="Email"/>
                <TextInput style={styles.textInput} placeholder="Phone Number"/>

                <TouchableOpacity style={styles.btn} onPress={{}}>
                    <Text style={{color: '#fff',fontSize: '20px',}}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={{}}>
                    <Text style={{color: '#fff',fontSize: '20px',}}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        width: '100%',
        backgroundColor: '#2EAC6D' ,
        justifyContent: 'center'
    },

    heading: {
        fontSize: '31px',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '80px',
        color: '#fff'
    },  

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },

    textInput: {
        marginTop: '20px',
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 60,
        backgroundColor: '#fff',
        fontSize: 15,
        width: '20rem',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },

    btn: {
        height: 45,
        width: 133,
        backgroundColor: '#0B4729',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,
    }
})