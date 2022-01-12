import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Context } from '../context/BlogContext';
import { BlogPost } from '../models/BlogPost';

interface ShowScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const ShowScreen = ({ navigation }: ShowScreenProps) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost: BlogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

export default ShowScreen;

const styles = StyleSheet.create({});
