import React, {useEffect} from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import Icon from './Icon';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ImageInput({imageUri, onChangeImage}) {
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) alert("You need to enable permission to upload an image.")
      }
      useEffect(() => {
        requestPermission()
      }, []) 

    const handlePress = () => {
        if (!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure you want to delete this image? You must delete the current image to upload another.", [
            {text: "Yes", onPress: ()=> onChangeImage(null)},
            {text: "No"}
        ])
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, 
                quality: 0.5,
                allowsEditing: true,
                aspect: [1, 1]
            })
            if (!result.canceled) onChangeImage(result.uri)
        } catch (error) {
            console.log("Error reading an image", error)
        }
    }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <Icon
                            iconName="camera"
                            size={50}
                            color={colors.amberGlow}
                            />
            }
            {imageUri && <Image 
                            source={{uri: imageUri}}
                            style={styles.image}
                            />
            }
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
     width: 100,
     height: 100,
     alignSelf: "center",
     backgroundColor: colors.mistyLight,
     borderRadius: 50,
     justifyContent: "center",
     alignItems: "center",
     overflow: "hidden",
  },
    image: {
        width: "100%",
        height: "100%",
    }
});

export default ImageInput;