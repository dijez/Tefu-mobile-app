
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    container :{
        flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    overflowY: 'scroll',
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
        fontFamily: 'Noto Sans Arabic',
        alignItems: 'center',
        textAlign: 'left' ,
        color: '#363636',
        lineHeight: 30
    },
    manpraying:{
        alignContent: 'center'
    },
    secondpart:{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    mosquenear:{
        color: '#063923',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 28,
        paddingBottom: 25,
    },
    searchcitycontainer:{
        backgroundColor: '#E8E8E8',
        borderColor: '#E1E1E1',
        borderRadius: 12,
        // marginBottom: 20,
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        padding: 12,
        borderWidth: 2,
    },
    inputsearchcity:{
        color: '#8F8F8F',
        fontFamily:'Noto Sans Arabic',
        fontSize: 16,
        // borderWidth: 0,
        fontWeight: 'normal',
        width: 250,
    },

    
    listmosquecontainer:{
        margin: 30,
        // justifyContent:'center',
        alignItems:'center',
        // flexWrap: "wrap"
    },
    
    polygonrectanglemosque:{
        width: 253.67,
        height: 407,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    marginBottom: 30,
        
    },

    textContainer:{
    alignItems: 'center', 
    justifyContent: 'center'
    },
    mosqueimage:{
        width: 120.41,
        height: 85.09,
        // resizeMode: 'center',
        alignItems: 'center',
        marginBottom: 15
        
    },
    mosquelistcontainer:{
        display: 'flex',
        gap: 5
    },
    mosquelistname:{
        fontFamily: 'inter',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        width:126,
        textAlign: 'center',


    },
    mosquelistmetersaway:{
        fontSize: 14,
        fontFamily:'Noto Sans Arabic',
        fontWeight: 'regular',
        lineHeight: 20,
        textAlign:'center'
    },
    mosquelistprayercontainer:{
        backgroundColor:'#E7EFE8',
        borderRadius: 12,
        margin: 12,
        paddingHorizontal: 20,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        
    },
    mosquelistprayer:{
        fontSize: 14,
        fontFamily:'Noto Sans Arabic',
        fontWeight: 'regular',
        lineHeight: 20,
        textAlign:'center'
    },
    mosquelisttime:{
        fontFamily: 'inter',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        textAlign: 'center',                  
        
    },
    mosquelistIqamahcontainer:{
        display: 'flex',
        flexDirection: 'row'
    },
    mosquelistIqamah:{
        fontSize: 14,
        fontFamily:'Noto Sans Arabic',
        fontWeight: 'regular',
        lineHeight: 20,
        textAlign:'center'
    },
    mosquelistIqamahtime:{
        fontSize: 14,
        fontFamily:'Noto Sans Arabic',
        fontWeight: 'regular',
        lineHeight: 20,
        textAlign:'center'
    },
    mosquelistbuttoncontainer:{
        backgroundColor: '#0A5F3A',
        color: '#fff',
        borderRadius: 12,
        paddingHorizontal:30,
        paddingVertical: 9,
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        marginTop: 10,

    },
    mosquelistbutton:{
        color: '#FBFBFB',
        fontFamily: 'Noto Sans Arabic',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
    },
    seemorecontainer:{
          backgroundColor: '#E8E8E8',
        borderWidth: 2,
        borderColor: '#E1E1E1',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        paddingVertical: 12,
        // paddingHorizontal: 85,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 354,
    },
    seemore:{
        fontFamily: 'Noto Sans Arabic',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    feedbackcontainer:{
        borderRadius: 12,
        paddingVertical: 13,
        paddingHorizontal: 16,
        width: 206,
        alignSelf:'flex-end',
    },
    feedback:{
        alignSelf: 'center',
        fontFamily: 'Noto Sans Arabic',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#FBFBFB'
    },
    feedbackgradient:{
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalCard: {
        width: "95%",
        backgroundColor: "#FBFBFB",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 24,
        borderRadius: 12,
        
    },
    leavefeedback:{
        fontFamily: 'inter',
        fontSize: 22,
        fontWeight:'bold',
        lineHeight: 28,

    },
    leavefeedbackcontainer:{
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignContent: 'center',
        marginBottom: 20
    },

    fullnamecontainer:{
        marginBottom: 12
    },
    fullname:{
          fontSize: 14,
        fontWeight: 'semibold',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 36,

    },
    fullnameinput:{
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#E1E1E1',
        backgroundColor: '#FBFBFB',
    },
    typefeedbackcontainer:{
        display: 'flex',
        gap: 20
    },
    typefeedbackinput:{
        textAlign: 'left',
        minHeight: 144,
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#E1E1E1',
        backgroundColor: '#FBFBFB',
        
    },
    borderline:{
        borderWidth: 1,
        borderColor: '#E1E1E1',
        backgroundColor: '#FBFBFB',
        marginBottom: 20,

    },
    leavefeedbackencouragement:{
        fontSize: 16,
        fontWeight: 'regular',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
        color: '#8F8F8F'
    },
    leavefeedbackencouragementcontainer:{
        marginBottom: 20
    },
    sendfeedback:{
         fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
        color: '#FBFBFB',
        textAlign: 'center'
    },
    sendfeedbackcontainer:{
        backgroundColor:'#0A5F3A',
        paddingHorizontal : 24,
        paddingVertical: 16,
        borderRadius: 12,
    },
    feedbackinputcontainer:{

    },
})

export {styles}