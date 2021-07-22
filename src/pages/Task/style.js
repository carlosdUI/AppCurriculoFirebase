import { styleSheets } from "min-document";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },

    Tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },

    deleteTasks: {
        justifyContent: 'center',
        paddingRight: 30,

    },

    descriptionTask: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 15,
        color: "#000",
        fontSize: 15

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
        

    },

    iconButton: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',

    },
    

});

export default styles