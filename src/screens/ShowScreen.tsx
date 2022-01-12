import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Context } from "../context/BlogContext";
import { BlogPost } from "../models/BlogPost";
import { EvilIcons } from "@expo/vector-icons";

interface ShowScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const ShowScreen = ({ navigation }: ShowScreenProps) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost: BlogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

ShowScreen.navigationOptions = ({ navigation }: ShowScreenProps) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});
