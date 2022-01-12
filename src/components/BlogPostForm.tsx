import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface InitialValues {
  title: string;
  content: string;
}

interface BlogPostFormProps {
  onSubmit: (title: string, content: string) => void;
  initialValues: InitialValues;
}

const BlogPostForm = ({ onSubmit, initialValues }: BlogPostFormProps) => {
  const [title, setTitle] = useState<string>(initialValues.title);
  const [content, setContent] = useState<string>(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

export default BlogPostForm;

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

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
