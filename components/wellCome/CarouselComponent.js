// components/CarouselComponent.js

import React from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const CarouselComponent = ({ data, onSnapToItem }) => {
  const { width } = Dimensions.get("window");

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
      onSnapToItem={onSnapToItem}
      loop
      autoplay
      autoplayInterval={5000} // Tự động chuyển slide mỗi 5 giây
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 20,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 15,
    fontFamily: "Roboto",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 30,
    marginBottom: 30,
    fontFamily: "Roboto",
  },
});

export default CarouselComponent;
