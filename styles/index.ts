import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container :{
    backgroundColor: '#DEDEDE',
    margin: 10
    },
    text:{
        color: 'red'
    },
    logo:{
        width: 30,
        height: 30,
    },
    logocontainer:{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        
    },
    navtefu:{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 20
        
    },
    tefu:{
        fontSize: 22,
        fontWeight: 'semibold',
        color: '#0E0E0E',
        fontFamily: 'inter',
        alignItems: 'center'
    },
    congregation:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0E0E0E',
        fontFamily: 'inter',
        alignItems: 'center',
        textAlign: 'left' 
    },
    findmosque:{
        fontSize: 18,
        fontWeight: 'regular',
        fontFamily: 'noto sans arabic',
        alignItems: 'center',
        textAlign: 'left' ,
        color: '#363636',
        lineHeight: 30
    },
    secondpart:{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }
})

export {styles}