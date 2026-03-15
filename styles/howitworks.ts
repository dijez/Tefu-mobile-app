import howitworks from "@/app/howitworks";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container :{
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
        overflowY: 'scroll',
    },
    howitworksHeader:{
        fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        color: '#0E0E0E',
        textAlign: 'center',
    },
    howitworksPara:{
        color: '#363636',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 36,
        textAlign: 'center',
        maxWidth: "90%",
        alignSelf: 'center',
        marginBottom: 20,
        // maxWidth: 301,
        // alignItems: 'center'

    },
    number:{
        color: '#063923',
        fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        textAlign: 'center',
    },
    number2:{
        color: '#493C17',
        fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        textAlign: 'center',
    },
    number3:{
        color: '#070707',
        fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        textAlign: 'center',
    },
    number4:{
        color: '#312002',
        fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        textAlign: 'center',
    },
    numbercontainer1:{
        borderRadius: 12,
        backgroundColor: '#E7EFEB',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 56,
        height: 56,
    },
    numbercontainer2:{
        borderRadius: 12,
        backgroundColor: '#FCF4DB',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 56,
        height: 56,
    },
    numbercontainer3:{
        borderRadius: 12,
        backgroundColor: '#E8E8E8',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 56,
        height: 56,
    },
    numbercontainer4:{
        borderRadius: 12,
        backgroundColor: '#FDECCE',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 56,
        height: 56,
    },
    findmosque:{
         fontFamily: 'inter',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 36,
        color: '#0E0E0E',
        marginBottom: 15,
    },
    findmosquepara:{
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 30,
        color: ' #0E0E0E'
    },
    findmosquecontainer:{
        display: 'flex',
        gap: 15
    },
    image:{
        width:345,
        height: 345,
    }
})

export {styles}