import React from "react";
import { Modal } from "react-native";
import SocialWebview from "./SocialWebview";

export default (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      style={{
        flex: 1,
      }}
    >
      <SocialWebview
        source={{ uri: props.source }}
        closeSocialModal={props.closeSocialModal}
      />
    </Modal>
  );
};
