import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { styles } from "@/styles/howitworks";

export default function HowItWorks() {

  const images = {
    step1: require("../assets/images/image1.png"),
    step2: require("../assets/images/image2.png"),
    step3: require("../assets/images/image3.png"),
    step4: require("../assets/images/image4.png"),
  };

  return (
    <ScrollView style={styles.container}>

      <Header />

      <View>
        <Text style={styles.howitworksHeader}>
          How It Works — Join Congregational Prayers Anywhere
        </Text>

        <Text style={styles.howitworksPara}>
          Tefu connects you to nearby mosques and keeps you updated on real-time
          congregational prayer schedules. Here’s how it helps you never miss a
          jamā‘ah.
        </Text>
      </View>

      {/* Step 1 */}

      <View style={styles.findmosquecontainer}>
        <Image style={styles.image} source={images.step1} />

        <View style={styles.numbercontainer1}>
          <Text style={styles.number}>1</Text>
        </View>

        <View>
          <Text style={styles.findmosque}>Find Mosques Instantly</Text>

          <Text style={styles.findmosquepara}>
            Allow location access so we can automatically show mosques around
            you, ranked by distance and prayer status.{"\n"}
            If you prefer, type the name of a city, street, or mosque — you’ll
            get results anywhere across Nigeria.
          </Text>
        </View>
      </View>

      {/* Step 2 */}

      <View style={styles.findmosquecontainer}>
        <Image style={styles.image} source={images.step2} />

        <View style={styles.numbercontainer2}>
          <Text style={styles.number2}>2</Text>
        </View>

        <View>
          <Text style={styles.findmosque}>See Who’s Yet to Pray</Text>

          <Text style={styles.findmosquepara}>
            Once we know your area, Tefu shows a real-time list of mosques near
            you — starting with those that haven’t yet observed the current
            prayer.{"\n"}
            Each mosque card displays the prayer name, time, and live status:
            Pending, In Progress, or Completed.
          </Text>
        </View>
      </View>

      {/* Step 3 */}

      <View style={styles.findmosquecontainer}>
        <Image style={styles.image} source={images.step3} />

        <View style={styles.numbercontainer3}>
          <Text style={styles.number3}>3</Text>
        </View>

        <View>
          <Text style={styles.findmosque}>Get Directions and Go</Text>

          <Text style={styles.findmosquepara}>
            Select any mosque to view details, distance, and navigation options.{"\n"}
            Tap Navigate to open your preferred map app and get step-by-step directions.{"\n"}
            Arrive on time for the congregational prayer before the iqāmah.
          </Text>
        </View>
      </View>

      {/* Step 4 */}

      <View style={styles.findmosquecontainer}>
        <Image style={styles.image} source={images.step4} />

        <View style={styles.numbercontainer4}>
          <Text style={styles.number4}>4</Text>
        </View>

        <View>
          <Text style={styles.findmosque}>Keep the Community Accurate</Text>

          <Text style={styles.findmosquepara}>
            Help maintain precise timings. If you notice an incorrect prayer
            schedule or time change, submit a correction request through the
            mosque’s page.{"\n"}
            Admins verify and update the records so every Muslim stays informed.
          </Text>
        </View>
      </View>

      <Footer />

    </ScrollView>
  );
}