import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

const Tag = ({ fc, isSelected, name }) => (
  <TouchableOpacity
    onPress={fc}
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {isSelected ? (
      <MaterialIcons name="check-box" size={24} color="#3B1464" />
    ) : (
      <MaterialIcons name="check-box-outline-blank" size={24} color="#3B1464" />
    )}
    <Text style={{ fontFamily: "nanumBold", color: "#3b1464", fontSize: 15 }}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default Tag;
