import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        paddingTop: 100
    },
    label: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonForm: {
        backgroundColor: '#a63838',
        marginVertical: 10,
        width: '95%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600,
    },
    lista: {
        flex: 1,
        marginTop: 25,
        width: '100%',
        paddingBottom: 100
    },
    campolista: {
        flexDirection: 'row',
        marginVertical: 1,
        paddingHorizontal: 15,
        height: 125,
        backgroundColor: 'white',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'space-between'
    },
    campoconteudo: {
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 75,
        width: 75
    },
    marginLista: {
        marginLeft: 75,
        textAlign: 'left'
    },
    campoicone: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    componentenumero: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    emptyList: {
        fontStyle: 'italic',
        color: '#292929f3',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginVertical: 30
    },
    title: {
        marginBottom: 25,
        fontSize: 28,
        color: '#a63838',
        fontWeight: 600,
        paddingHorizontal: 25
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '100%',
        padding: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 20,
        marginVertical: 10
    },
    input: {
        borderBottomColor: '#f7f7f7',
        borderBottomWidth: 2,
        paddingBottom: 5,
        fontSize: 18,
        marginVertical: 5
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    itemDescr: {
       width: '100%'
    },
    descrTitulo: {
        width: '50%'
    }
});