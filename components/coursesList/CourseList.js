import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { CourseItem } from "../courseItem";
import { useNavigation } from "@react-navigation/native";
import { APP_ROUTES } from "../../constants";

const CourseList = ({ data }) => {
  const navigation = useNavigation();

  const handleOnPress = (slug) => {
    navigation.navigate(APP_ROUTES.VIEW_COURSE, {
      slug,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        maxWidth: "50%",
        marginHorizontal: 5,
      }}
      onPress={() => handleOnPress(item.slug)}
    >
      <CourseItem data={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  itemSeparator: {
    height: 16,
  },
});

export default CourseList;
