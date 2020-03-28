import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Container: {
        flex: 1,
    },
    button:{
        backgroundColor:'#FF7F2D',
        marginLeft:41,
        marginRight:41,
        borderRadius:11,
        marginBottom:15,
        marginTop:20
    },
    guima:{
        color:'white',
        alignSelf:'center',
        marginTop:12,
        marginBottom:12
    },
    Container1:{
        flex:50,
        justifyContent:'space-between'
    },
  
    img: {
        width: 275,
        height: 230,
        alignSelf:'center',
    },
    img1:{
        flexDirection:'row',
        flex:50,
        justifyContent:'center'
    },
    quenmatkhau:{
        fontSize:30,
        alignSelf:'center',
        fontWeight:'500',
        paddingTop:10,
        paddingBottom:10
    },
    thongbao:{
        alignSelf:'center',
        marginTop:5,
        color:'#595959'
    },
    input:{
        marginLeft:41,
        marginRight:41,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#999999",
        borderRadius:11,
        marginTop:25,
        
    },
    input1:{
        alignSelf:'center',
        textAlign:'center',
        fontSize:14,
        marginTop:7,
        marginBottom:7,
       
    },
    color:{
        color:'#2DADFF'
    }
})

export default styles;