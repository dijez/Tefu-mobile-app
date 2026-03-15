import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container :{
        // flex: 1,
    backgroundColor: '#FFFFFF',
    // marginRight: 20,
    // marginLeft: 20,

        padding: 12,
        // display: 'flex',
        flexDirection: 'column',
        gap: 25,
        alignItems: 'center'
   
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
     tefu:{
        fontSize: 22,
        fontWeight: '600',
        color: '#0E0E0E',
        fontFamily: 'inter',
        alignItems: 'center'
    },
    howitworkscontainer:{
        display: 'flex',
        alignItems: 'center',

    },
    howitworks:{
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    
    addmosquecontainer:{
        backgroundColor: '#0A5F3A',
        borderRadius: 13,
        paddingHorizontal: 16,
        paddingVertical: 13,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    addmosque:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
        color: '#FBFBFB',
    }
}) 

export { styles}