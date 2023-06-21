import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a63838',
        //  alignItems: 'center',
        //  justifyContent: 'center',
      },
      title: {
        marginTop: 50,
        marginBottom: 25,
        fontSize: 28,
        color: '#fff',
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
      buttonForm: {
        backgroundColor: '#a63838',
        marginVertical: 10,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600
      }
});