import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { APP_ROUTES } from "../../constants";
import keywordService from "../../services/searchService";
import { getImage } from "../../utils";

const SearchContainer = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchResults = async () => {
    try {
      setIsLoading(true);
      const res = await keywordService.search(searchText);
      setSearchResults(res);
    } catch (error) {
      console.log("🚀 ~ fetchSearchResults ~ error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardText}>{item.count} results</Text>
    </View>
  );

  const renderCourses = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: getImage(item.thumbnailUrl) }}
        style={styles.courseImage}
      />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>
          {item.description.length > 100
            ? `${item.description.substring(0, 100)}...`
            : item.description}
        </Text>
        <Text style={styles.coursePrice}>Price: {item.price}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(APP_ROUTES.VIEW_COURSE, { slug: item.slug })
          }
        >
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPosts = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <RenderHTML
        style={styles.postContent}
        contentWidth={300}
        source={{
          html:
            item.contentHtml.length > 100
              ? `${item.contentHtml.substring(0, 100)}...`
              : item.contentHtml,
        }}
      />
      {item.contentHtml.length > 100 && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(APP_ROUTES.VIEW_POST, { slug: item.slug })
          }
        >
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderUsers = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: getImage(item.avatar) }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{item.fullName}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Search for keywords, courses, posts, and users:
      </Text>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <Button title="Search" onPress={fetchSearchResults} color="#4CAF50" />

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}

      {searchResults && (
        <>
          {searchResults.keywords.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Keywords:</Text>
              <FlatList
                data={searchResults.keywords}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
              />
            </View>
          )}

          {searchResults.courses.totalElements > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Courses:</Text>
              <FlatList
                data={searchResults.courses.content}
                renderItem={renderCourses}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}

          {searchResults.posts.totalElements > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Posts:</Text>
              <FlatList
                data={searchResults.posts.content}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}

          {searchResults.users.totalElements > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Users:</Text>
              <FlatList
                data={searchResults.users.content}
                renderItem={renderUsers}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#888",
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseInfo: {
    marginTop: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  courseDescription: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 14,
    color: "#4CAF50",
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  postContent: {
    fontSize: 14,
    color: "#555",
  },
  seeMore: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SearchContainer;
