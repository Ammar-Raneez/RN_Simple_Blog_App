import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import BlogPostForm from "../components/BlogPostForm";
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

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title: string, content: string) => null}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
