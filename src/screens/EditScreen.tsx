import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Context } from "../context/BlogContext";
import { BlogPost } from "../models/BlogPost";

interface EditScreenProps {
  navigation: NavigationScreenProp<any, any>;
}
const EditScreen = ({ navigation }: EditScreenProps) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost: BlogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState<string>(blogPost.title);
  const [content, setContent] = useState<string>(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      {/* <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate("Index"))
        }
      /> */}
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
