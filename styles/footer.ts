import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container :{
    backgroundColor: '#031C11',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignContent: 'center',
    justifyContent: 'center'
},
icon:{
    paddingRight: 12,

    alignContent: 'center',
    justifyContent: 'center'

    },
    rights:{
        color: '#FBFBFB',
        fontSize: 16,
        fontWeight: 'regular',
        fontFamily: 'Noto Sans Arabic',
        alignItems: 'center',
        textAlign: 'left' ,
        lineHeight: 20
    },
    year:{
        color:'#F2C94C'
    }
})

export {styles}