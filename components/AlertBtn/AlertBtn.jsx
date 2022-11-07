import { View, Button } from "react-native";

export const AlertBtn = () => {
  const alerta = () => {
    alert("qué onda con el alert");
  };

  return (
    <View>
      <Button
        onPress={alerta}
        title="Prueba"
        color="#841584"
        accessibilityLabel="Botón de prueba"
      />
    </View>
  );
};
