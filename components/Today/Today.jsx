import { useEffect } from "react";
import { View, Text } from "react-native";

export const Today = () => {
  const dia = () => {
    const dateToday = new Date();
    const strToday =
      dateToday.getDate() +
      "/" +
      dateToday.getMonth() +
      "/" +
      dateToday.getYear();
    return strToday;
  };

  return (
    <View>
      <Text>Hoy es {dia()}</Text>
    </View>
  );
};
