import { View, Text, StyleSheet, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-web'

export default function Home() {
    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>
            <View style={styles.register}>
                <TouchableOpacity style={styles.registerButton} onPress={{}}>
                    <Text style={{color: '#2EAC6D',fontSize: '31px',}}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.scanner}>
                <TouchableOpacity style={styles.scannerButton} onPress={{}}>
                    <Text style={{color: '#fff',fontSize: '31px',}}>Scan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        width: '100%',
        flex: 1,
    },

    register: {
        flex: 1,
        height: '50%',
    },

    registerButton: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',   
    },

    scanner: {
        flex: 1,
        height: '50%',
    },

    scannerButton: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#2EAC6D'
    }
})