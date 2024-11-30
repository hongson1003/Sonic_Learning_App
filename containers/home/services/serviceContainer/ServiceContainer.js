import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { linkServiceService } from "../../../../services";
import { ServiceItem } from "../serviceItem";

const ServiceContainer = () => {
  const [linkServices, setLinkServices] = useState([]);

  const fetchLinkServices = async () => {
    try {
      const res = await linkServiceService.getAll();
      console.log("🚀 ~ fetchLinkServices ~ res:", res);
      setLinkServices(res);
    } catch (error) {
      console.log("🚀 ~ fetchLinkServices ~ error:", error);
    }
  };

  useEffect(() => {
    fetchLinkServices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Các bài giảng được chia sẻ đa dạng từ nhiều nguồn khác nhau
      </Text>

      {/* FlatList hiển thị danh sách dịch vụ */}
      <FlatList
        data={linkServices}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => <ServiceItem data={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  listContainer: {
    paddingHorizontal: 5,
  },
  separator: {
    width: 10,
  },
});

export default ServiceContainer;
