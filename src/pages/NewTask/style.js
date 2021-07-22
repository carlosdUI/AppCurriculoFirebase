import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    label: {
        width: '90%',

        marginTop: 20,
        marginLeft: 20,
        
        fontSize: 16,
        color: "#3498db"
    },

    inputText: {
        width: '80%',
        height: 40,

        marginTop: 10,
        marginLeft: 20,
        marginRight: 'auto',
        padding: 10,
        
        

        borderWidth: 1,
        borderColor: "#3498db",
        borderRadius: 5
    },

    bgButton: {
        width: 60,
        height: 60,

        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',

        bottom: 30,
        right: 20,

        backgroundColor: "#3498db",
        borderRadius: 50,

    }


});

export default styles