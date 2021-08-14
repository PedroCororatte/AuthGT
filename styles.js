import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        width: screen.width,
        height: screen.height,
        backgroundColor: 'rgba(12, 7, 110, 0.8)',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    inputContainer: {
        width:screen.width,
        height:screen.height,
        marginTop:'40%',
    },
    title: {
        fontSize: 30,
        color: "#fff",
        textAlign:'center',
        marginTop:'20%',
    },
    bg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        alignSelf:'center',
        height:'10%',
        width:'85%',
        marginTop:'10%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        paddingLeft:10,
        color:'#ffff'
    },
    buttons:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    button:{
        width:'40%',
        height:'45%', 
        margin:5,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',   
    },
    bottom:{
        flexDirection:'column',
    },
    footerText:{
        color:'#fff',
        paddingTop:'5%',
        fontSize:16,
        paddingLeft:5,
        textAlign:'center'
    },
    textRecovery:{
        color:'#fff',
        fontSize:16,
        paddingTop:'5%',
        paddingLeft:5,
        textAlign:'center',
        color:'#66ccff'
    }

})