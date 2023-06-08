import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        alignItems:"center",
        marginTop:30,
        bottom:0,
        width:"100%",
        height:"100%",
        backgroundColor:"#EFD7F3",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    formLabel:{
        color:"#524554",
        paddingLeft:18,
        fontSize:18    
        
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#E5E5E5",
        height:40,
        margin:12,
        paddingLeft:10
        
    },
    button: {
        backgroundColor: '#A48AA8',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent:"center",
        width: '100%',
        height: 45,
        marginTop: 30,
      },
      buttonText: {
        color: '#E5E5E5',
        fontSize: 19,
        
      },

  });
  
  export default styles