import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

interface CreateScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const CreateScreen = ({ navigation }: CreateScreenProps) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title: string, content: string) =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
