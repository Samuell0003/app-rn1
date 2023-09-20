import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Product = ({ name, price, image, onPress, cont, style }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={!style ? styles.thumb : style.thumb} source={image} resizeMode="contain" />
      <View style={!style ? styles.infoContainer : style.infoContainer}>
        <Text style={!style ? styles.name : style.name}>{name}</Text>
        <Text style={!style ? styles.price : style.price}>{numberFormat(price)}</Text>
        {cont ? <Text style={{textAlign:"right", color:"black", fontWeight: "bold"}}>Quantidade: {cont}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 10,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
