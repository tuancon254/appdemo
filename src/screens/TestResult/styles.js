import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    Result: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 5,
        paddingBottom: 10,
        paddingTop: 20,
        borderColor: "#E4E4E4",
        fontSize: 15,
        justifyContent: 'space-between'
    },
    ResultContainer: {
        marginLeft: 33,
        marginRight: 34,
        marginBottom:44

    },
    Average: {
        color: "white",
        fontSize: 22,
        fontWeight: '600'
    },
    AverageScore: {
        fontSize: 44,
        color: "#FF7F2D",
        fontWeight: 'bold',

    },
    ResultText: {
        color: "white",
        fontSize: 16
    },
    Score: {
        color: "#FF7F2D",
        fontSize: 17,
        fontWeight: '600'
    },
    Container: {
        flex: 1,
        backgroundColor: "#151522"
    },
    ProfileContainer: {
        height: "35%",
        width: "100%",
        flex: 40,
        marginTop: 100
    },
    Chao_mung: {
        fontSize: 20,
        color: "white",
        alignSelf: 'center'
    },
    profile: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 34,
        marginRight: 34,
        paddingTop: 20
    },
    Avatar: {
        alignSelf: 'center',
        position: 'relative'
    },
    Name: {
        fontSize: 22,
        fontWeight: '600'
    },
    Add: {
        alignSelf: 'center',
        fontSize: 12
    },
    Add_show: {
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 2,
        marginBottom: 10,
        color: '#196912'
    },
    Decor: {
        backgroundColor: "#999999",
        alignSelf: 'center',
        width: 1,
        height: 22
    },
    AddContainer: {
        flex: 50,
        alignSelf: 'center'
    }



})

export default styles;