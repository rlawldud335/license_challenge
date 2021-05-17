import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

const Tag = ({ onPress, isSelected, name }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
    }}
  >
    {isSelected ? (
      <MaterialIcons name="check-box" size={24} color="#652DA1" />
    ) : (
      <MaterialIcons name="check-box-outline-blank" size={24} color="#652DA1" />
    )}
    <Text
      style={{
        fontFamily: "nanumBold",
        color: "#3b1464",
        fontSize: 15,
        marginLeft: 5,
      }}
    >
      {name}
    </Text>
  </TouchableOpacity>
);

export default Tag;
