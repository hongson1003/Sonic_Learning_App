import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CourseItem } from "../courseItem";

const CourseList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        maxWidth: "50%",
        marginHorizontal: 5,
      }}
    >
      <CourseItem data={item} />
    </View>
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
