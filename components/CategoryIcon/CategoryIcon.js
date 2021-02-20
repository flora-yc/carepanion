import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
});

function CategoryIcon(props) {
  return (
    <View>
      <Image
        styles={styles.logo}
        source={{
          uri: `../assets/${props.src}`,
        }}
      />
    </View>
  );
}

export default CategoryIcon;
