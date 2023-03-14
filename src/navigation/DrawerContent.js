/** @format */
import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Text, IconButton } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function DrawerContent(props) {
  const { navigation } = props;
  const [active, setActive] = useState("home");

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <ImageBackground
          source={require("../../assets/images/menu-bg.jpeg")}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 5,
            alignItems: "center",
          }}>
          <Image
            source={require("../../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />

          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "bold",
              marginBottom: 5,
            }}>
            Bienvenido
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginBottom: 5,
              color: "#fff",
              fontWeight: "bold",
            }}>
            Moril jean francois
          </Text>
        </ImageBackground>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <Drawer.Section>
            <Drawer.Item
              label='Home'
              active={active === "home"}
              onPress={() => onChangeScreen("home")}
            />

            <Drawer.Item
              label='Nuevas películas'
              active={active === "news"}
              onPress={() => onChangeScreen("news")}
            />

            <Drawer.Item
              label='Movie'
              active={active === "movie"}
              onPress={() => onChangeScreen("movie")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          alignItems: "center",
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("salir");
          }}
          style={{
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8200d6" }}>
            Salir
          </Text>
          <IconButton icon='logout' color='#8200d6' size={23} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
