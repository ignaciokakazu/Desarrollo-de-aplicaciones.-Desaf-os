import { Text, TextInput, Button } from "react-native";
import React from "react";

export const Inicial = () => {
  const [user, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <>
      <Text>Usuario</Text>
      <TextInput
        //style={styles.input}
        //onChangeText={onChangeNumber}
        value={user}
        placeholder="Usuario"
        keyboardType="text"
      />
      <TextInput
        //style={styles.input}
        //onChangeText={onChangeNumber}
        value={password}
        placeholder="Contraseña"
        keyboardType="text"
      />
      <Button
        title="Login"
        color="#841584"
        accessibilityLabel="Botón de prueba"
      />
    </>
  );
};
