import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 10,
        overflowY: 'scroll',
    },
    arrowleft:{
        marginBottom: 10
    },
    mosqueimage:{
        width: 45,
        height: 32,

    },
    mosquenamecontaier:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 15,
    },
    mosquename:{
        fontFamily: 'inter',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',

    },
    mosquemetercontainer:{
        backgroundColor: '#E8E8E8',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        maxWidth: 122,
        marginBottom: 15,
    },
    mosquemeter:{
        color: '#363636',
        fontSize: 16,
        fontWeight: 'regular',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    mapvisualcontainer:{
        backgroundColor: '#E1E1E1',
        borderRadius: 12,
        // maxWidth: 329,
        // maxHeight: 240,
        marginBottom: 15,
    },
    directions:{
        color:'#FBFBFB',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22
    },
    directionscontainer:{
        backgroundColor:'#0A5F3A',
        display: 'flex',
        flexDirection: 'row',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingVertical: 18,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        
    },
    borderline:{
        borderWidth: 1,
        borderColor: '#8F8F8F'
    },
    prayerschedule: {
        fontFamily: 'inter',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20
    },
    fajrcontainer:{
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 15
    },
    dhuhrcontainer:{
        backgroundColor: '#F59E0B',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 15,
        // padding: 25,
        // maxWidth: 156,
        
    },
    asrcontainer:{
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 15,
        
    },
    maghribcontainer:{
        marginBottom: 15,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 12,
        
    },
    ishacontainer:{
        marginBottom: 15,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 12,
       
    },
    prayermargin:{
        margin: 2,
    },
    observed:{
        color:'#8F8F8F',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 20,
    },
    observedcontainer:{
        backgroundColor: '#E1E1E1',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    upcoming:{
        color:'#FBFBFB',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 20,
    },
    upcomingcontainer:{
        backgroundColor: '#F7B13C',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    upcomingmaincontainer:{
        backgroundColor: '#F59E0B',
    },
    notyetobserved:{
        color:'#935F07',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 20,
    },
    notyetobservedcontainer:{
        backgroundColor: '#FEF5E7',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    fajr:{
        color:'#8F8F8F',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    fajrprayertime:{
        fontFamily: 'inter',
        color:'#8F8F8F',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 28,
    },
    dhuhr:{
        color:'#FBFBFB',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    dhuhrprayertime:{
        fontFamily: 'inter',
        color:'#FBFBFB',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 28,
    },
    asr:{
        color:'#000',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    asrprayertime:{
        fontFamily: 'inter',
        color:'#000',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 28,
    },
    maghrib:{
        color:'#000',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    maghribprayertime:{
        fontFamily: 'inter',
        color:'#000',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 28,
    },
    isha:{
        color:'#000',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
        lineHeight: 22,
    },
    ishaprayertime:{
        fontFamily: 'inter',
        color:'#000',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 28,
    },
    iqamahtimecontainer:{
        display:'flex',
        flexDirection: 'row',
        gap: 10,
    },
    fajriqamahtime:{
        fontFamily: 'Noto Sans Arabic',
        color:'#8F8F8F',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
    dhuhriqamahtime:{
        fontFamily: 'Noto Sans Arabic',
        color:'#FBFBFB',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
    asriqamahtime:{
        fontFamily: 'Noto Sans Arabic',
        color:'#000',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
    maghribiqamahtime:{
        fontFamily: 'Noto Sans Arabic',
        color:'#000',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
    ishaiqamahtime:{
        fontFamily: 'Noto Sans Arabic',
        color:'#000',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 20,
    },
    dhuhrasrcards:{
        display:'flex',
        flexDirection: 'row',
        // gap: 15,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    magribishacards:{
        display:'flex',
        flexDirection: 'row',
        // gap: 15,
        justifyContent: 'space-between',
        marginBottom: 15,
    }
})

export { styles}