import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
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

})

export {styles}