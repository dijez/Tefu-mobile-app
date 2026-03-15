import { Text, View,Image,TextInput, ImageBackground  } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from "@/styles/navigation";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { mosques } from "@/data/mosque";

export default function Navigate() {
  
const mosque = mosques[0];

const prayers = [
  { key: "fajr", label: "Fajr" },
  { key: "dhuhr", label: "Dhuhr" },
  { key: "asr", label: "Asr" },
  { key: "maghrib", label: "Maghrib" },
  { key: "isha", label: "Isha" }
];

type PrayerKey = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

  
function timeToMinutes(time: string) {
  const [hourMinute, modifier] = time.split(" ");
  let [hours, minutes] = hourMinute.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}
const now = new Date();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

const prayerSchedule = prayers.map((prayer) => ({
  ...prayer,
  time: mosque.prayerTimes[prayer.key as keyof typeof mosque.prayerTimes],
}));

let upcomingPrayerKey: string | null = null;

for (const prayer of prayerSchedule) {
  const prayerMinutes = timeToMinutes(prayer.time);

  if (prayerMinutes > currentMinutes) {
    upcomingPrayerKey = prayer.key;
    break;
  }
}


  return (
    <View style={styles.container}>
      
      
      <View>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" style={styles.arrowleft}/>
        <View style={styles.mosquenamecontaier}>
          <Image style={styles.mosqueimage} source={require("../assets/images/mosque.png")}/>
          <Text style={styles.mosquename}>Al-Nur Centeral Mosque</Text>
        </View>
        <View style={styles.mosquemetercontainer}>
          <Text style={styles.mosquemeter}>450 m away</Text>
        </View>
      </View>


      <View style={styles.mapvisualcontainer}>
        <Text>map visual</Text>
        <View style={styles.directionscontainer}>
          <Text style={styles.directions}>Directions</Text>
          <FontAwesome5 name="directions" size={20} color="white" />
        </View>
      </View>
    
      <View style={styles.borderline}></View>
    
      <View>
        <Text style={styles.prayerschedule}>Prayer Schedule</Text>



    <View>
  {/* Row 1: Fajr on its own */}
  {prayerSchedule
    .filter((p) => p.key === "fajr")
    .map((prayer) => {
      const prayerMinutes = timeToMinutes(prayer.time);
      let status = "notYet";
      if (prayerMinutes < currentMinutes) status = "observed";
      if (prayer.key === upcomingPrayerKey) status = "upcoming";

      const containerStyle =
        status === "observed"
          ? styles.fajrcontainer
          : status === "upcoming"
          ? styles.dhuhrcontainer
          : styles.maghribcontainer;

      const statusContainerStyle =
        status === "observed"
          ? styles.observedcontainer
          : status === "upcoming"
          ? styles.upcomingcontainer
          : styles.notyetobservedcontainer;

      const statusTextStyle =
        status === "observed"
          ? styles.observed
          : status === "upcoming"
          ? styles.upcoming
          : styles.notyetobserved;

      const prayerTextStyle =
        status === "observed"
          ? styles.fajr
          : status === "upcoming"
          ? styles.dhuhr
          : styles.maghrib;

      const prayerTimeStyle =
        status === "observed"
          ? styles.fajrprayertime
          : status === "upcoming"
          ? styles.dhuhrprayertime
          : styles.maghribprayertime;

      const iqamahTextStyle =
        status === "observed"
          ? styles.fajriqamahtime
          : status === "upcoming"
          ? styles.dhuhriqamahtime
          : styles.maghribiqamahtime;

      const iqamahTime =
        status === "observed"
          ? mosque.iqamahTimes.iqamahFajr
          : status === "upcoming"
          ? mosque.iqamahTimes.iqamahDhuhr
          : mosque.iqamahTimes.iqamahMaghrib;

      return (
        <View key={prayer.key} style={containerStyle}>
          <View style={statusContainerStyle}>
            <Text style={[statusTextStyle, styles.prayermargin]}>
              {status === "observed"
                ? "Observed"
                : status === "upcoming"
                ? "Upcoming"
                : "Not yet observed"}
            </Text>
          </View>

          <Text style={[prayerTextStyle, styles.prayermargin]}>{prayer.label}</Text>
          <Text style={[prayerTimeStyle, styles.prayermargin]}>{prayer.time}</Text>

          <View style={[styles.iqamahtimecontainer, styles.prayermargin]}>
              <Text style={iqamahTextStyle}>Iqamah</Text>
              <Text style={iqamahTextStyle}>
  {prayer.key === "fajr"
    ? mosque.iqamahTimes.iqamahFajr
    : prayer.key === "dhuhr"
    ? mosque.iqamahTimes.iqamahDhuhr
    : prayer.key === "asr"
    ? mosque.iqamahTimes.iqamahAsr
    : prayer.key === "maghrib"
    ? mosque.iqamahTimes.iqamahMaghrib
    : mosque.iqamahTimes.iqamahIsha}
</Text>
            </View>
        </View>
      );
    })}

  {/* Row 2: Dhuhr + Asr */}
  <View style={styles.dhuhrasrcards}>
    {prayerSchedule
      .filter((p) => p.key === "dhuhr" || p.key === "asr")
      .map((prayer) => {
        const prayerMinutes = timeToMinutes(prayer.time);
        let status = "notYet";
        if (prayerMinutes < currentMinutes) status = "observed";
        if (prayer.key === upcomingPrayerKey) status = "upcoming";

        const containerStyle =
          status === "observed"
            ? styles.fajrcontainer
            : status === "upcoming"
            ? styles.dhuhrcontainer
            : styles.maghribcontainer;

        const statusContainerStyle =
          status === "observed"
            ? styles.observedcontainer
            : status === "upcoming"
            ? styles.upcomingcontainer
            : styles.notyetobservedcontainer;

        const statusTextStyle =
          status === "observed"
            ? styles.observed
            : status === "upcoming"
            ? styles.upcoming
            : styles.notyetobserved;

        const prayerTextStyle =
          status === "observed"
            ? styles.fajr
            : status === "upcoming"
            ? styles.dhuhr
            : styles.maghrib;

        const prayerTimeStyle =
          status === "observed"
            ? styles.fajrprayertime
            : status === "upcoming"
            ? styles.dhuhrprayertime
            : styles.maghribprayertime;

        const iqamahTextStyle =
          status === "observed"
            ? styles.fajriqamahtime
            : status === "upcoming"
            ? styles.dhuhriqamahtime
            : styles.maghribiqamahtime;

        const iqamahTime =
          status === "observed"
            ? mosque.iqamahTimes.iqamahFajr
            : status === "upcoming"
            ? mosque.iqamahTimes.iqamahDhuhr
            : mosque.iqamahTimes.iqamahMaghrib;

        return (
          <View key={prayer.key} style={containerStyle}>
            <View style={statusContainerStyle}>
              <Text style={[statusTextStyle, styles.prayermargin]}>
                {status === "observed"
                  ? "Observed"
                  : status === "upcoming"
                  ? "Upcoming"
                  : "Not yet observed"}
              </Text>
            </View>

            <Text style={[prayerTextStyle, styles.prayermargin]}>{prayer.label}</Text>
            <Text style={[prayerTimeStyle, styles.prayermargin]}>{prayer.time}</Text>

            <View style={[styles.iqamahtimecontainer, styles.prayermargin]}>
              <Text style={iqamahTextStyle}>Iqamah</Text>
              <Text style={iqamahTextStyle}>
  {prayer.key === "fajr"
    ? mosque.iqamahTimes.iqamahFajr
    : prayer.key === "dhuhr"
    ? mosque.iqamahTimes.iqamahDhuhr
    : prayer.key === "asr"
    ? mosque.iqamahTimes.iqamahAsr
    : prayer.key === "maghrib"
    ? mosque.iqamahTimes.iqamahMaghrib
    : mosque.iqamahTimes.iqamahIsha}
</Text>
            </View>
          </View>
        );
      })}
  </View>

  {/* Row 3: Maghrib + Isha */}
  <View style={styles.magribishacards}>
    {prayerSchedule
      .filter((p) => p.key === "maghrib" || p.key === "isha")
      .map((prayer) => {
        const prayerMinutes = timeToMinutes(prayer.time);
        let status = "notYet";
        if (prayerMinutes < currentMinutes) status = "observed";
        if (prayer.key === upcomingPrayerKey) status = "upcoming";

        const containerStyle =
          status === "observed"
            ? styles.fajrcontainer
            : status === "upcoming"
            ? styles.dhuhrcontainer
            : styles.maghribcontainer;

        const statusContainerStyle =
          status === "observed"
            ? styles.observedcontainer
            : status === "upcoming"
            ? styles.upcomingcontainer
            : styles.notyetobservedcontainer;

        const statusTextStyle =
          status === "observed"
            ? styles.observed
            : status === "upcoming"
            ? styles.upcoming
            : styles.notyetobserved;

        const prayerTextStyle =
          status === "observed"
            ? styles.fajr
            : status === "upcoming"
            ? styles.dhuhr
            : styles.maghrib;

        const prayerTimeStyle =
          status === "observed"
            ? styles.fajrprayertime
            : status === "upcoming"
            ? styles.dhuhrprayertime
            : styles.maghribprayertime;

        const iqamahTextStyle =
          status === "observed"
            ? styles.fajriqamahtime
            : status === "upcoming"
            ? styles.dhuhriqamahtime
            : styles.maghribiqamahtime;

        const iqamahTime =
          status === "observed"
            ? mosque.iqamahTimes.iqamahFajr
            : status === "upcoming"
            ? mosque.iqamahTimes.iqamahDhuhr
            : mosque.iqamahTimes.iqamahMaghrib;

        return (
          <View key={prayer.key} style={containerStyle}>
            <View style={statusContainerStyle}>
              <Text style={[statusTextStyle, styles.prayermargin]}>
                {status === "observed"
                  ? "Observed"
                  : status === "upcoming"
                  ? "Upcoming"
                  : "Not yet observed"}
              </Text>
            </View>

            <Text style={[prayerTextStyle, styles.prayermargin]}>{prayer.label}</Text>
            <Text style={[prayerTimeStyle, styles.prayermargin]}>{prayer.time}</Text>

           <View style={[styles.iqamahtimecontainer, styles.prayermargin]}>
              <Text style={iqamahTextStyle}>Iqamah</Text>
              <Text style={iqamahTextStyle}>
  {prayer.key === "fajr"
    ? mosque.iqamahTimes.iqamahFajr
    : prayer.key === "dhuhr"
    ? mosque.iqamahTimes.iqamahDhuhr
    : prayer.key === "asr"
    ? mosque.iqamahTimes.iqamahAsr
    : prayer.key === "maghrib"
    ? mosque.iqamahTimes.iqamahMaghrib
    : mosque.iqamahTimes.iqamahIsha}
</Text>
            </View>
          </View>
        );
      })}
  </View>
</View>

        {/* <View>

        
        <View style={styles.fajrcontainer}>
          <View style={styles.observedcontainer}>
          <Text style={[styles.observed, styles.prayermargin]}>Observed</Text>
          </View>
          <Text style={[styles.fajr, styles.prayermargin]}>Fajr</Text>
          <Text style={[styles.fajrprayertime , styles.prayermargin]}>{mosque.prayerTimes.fajr}</Text>
          
          <View style={[styles.iqamahtimecontainer , styles.prayermargin]}>
          <Text style={styles.fajriqamahtime}>Iqamah</Text>
          <Text style={styles.fajriqamahtime}>{mosque.iqamahTimes.iqamahFajr}</Text>
          </View>
          
        </View>
        

        <View style={styles.dhuhrasrcards}>

          <View style={styles.dhuhrcontainer}>
            <View style={styles.upcomingcontainer}>
              <Text style={[styles.upcoming, styles.prayermargin]}>Upcoming</Text>
            </View>
            <Text style={[styles.dhuhr, styles.prayermargin]}>Dhuhr</Text>
            <Text style={[styles.dhuhrprayertime , styles.prayermargin]}>{mosque.prayerTimes.dhuhr}</Text>
          
            <View style={[styles.iqamahtimecontainer , styles.prayermargin]}>
              <Text style={styles.dhuhriqamahtime}>Iqamah</Text>
              <Text style={styles.dhuhriqamahtime}>{mosque.iqamahTimes.iqamahDhuhr}</Text>
            </View>
          
          </View>
         
          <View style={styles.asrcontainer}>
            <View style={styles.notyetobservedcontainer}>
              <Text style={[styles.notyetobserved, styles.prayermargin]}>Not yet observed</Text>
            </View>
            <Text style={[styles.asr, styles.prayermargin]}>Asr</Text>
            <Text style={[styles.asrprayertime , styles.prayermargin]}>{mosque.prayerTimes.asr}</Text>
          
            <View style={[styles.iqamahtimecontainer , styles.prayermargin]}>
              <Text style={styles.asriqamahtime}>Iqamah</Text>
              <Text style={styles.asriqamahtime}>{mosque.iqamahTimes.iqamahAsr}</Text>
            </View>
          
          </View>
        
        </View>
        
        
        <View style={styles.magribishacards}>
         
          <View style={styles.maghribcontainer}>
            <View style={styles.notyetobservedcontainer}>
              <Text style={[styles.notyetobserved, styles.prayermargin]}>Not yet observed</Text>
            </View>
            <Text style={[styles.maghrib, styles.prayermargin]}>Maghrib</Text>
            <Text style={[styles.maghribprayertime , styles.prayermargin]}>{mosque.prayerTimes.maghrib}</Text>
          
            <View style={[styles.iqamahtimecontainer , styles.prayermargin]}>
              <Text style={styles.maghribiqamahtime}>Iqamah</Text>
              <Text style={styles.maghribiqamahtime}>{mosque.iqamahTimes.iqamahMaghrib}</Text>
            </View>
          
          </View>
          
          <View style={styles.ishacontainer}>
            <View style={styles.notyetobservedcontainer}>
              <Text style={[styles.notyetobserved, styles.prayermargin]}>Not yet observed</Text>
            </View>
            <Text style={[styles.isha, styles.prayermargin]}>Isha</Text>
            <Text style={[styles.ishaprayertime , styles.prayermargin]}>{mosque.prayerTimes.isha}</Text>
          
            <View style={[styles.iqamahtimecontainer , styles.prayermargin]}>
              <Text style={styles.ishaiqamahtime}>Iqamah</Text>
              <Text style={styles.ishaiqamahtime}>{mosque.iqamahTimes.iqamahIsha}</Text>
            </View>
          
          </View>
        
        </View>


      </View> */}


      </View>
    
    
    </View>
);
}
