import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import { Product } from "../components/Product";


export const Cart = ({ items, getTotalPrice, removeFromCard }) => {
  const renderProduct = ({ item: product }) => {
    return (
      <View>
        <Product
          {...product.product}
          cont={product.qty}
          style={styles}
        />
        <Button color={"red"} title="Excluir" onPress={() => removeFromCard(product.id)} />
      </View>

    );
  };
  return (
    <View>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.product.id.toString()}
        data={items}
        renderItem={renderProduct}
      />
      { getTotalPrice() == 0 ? null :
        <View>
          <Text style={{padding: 8, fontSize: 16, fontWeight: "bold"}}>Valor total: {getTotalPrice()}</Text>
        </View>
      }
    </View>
  )
};


const styles = StyleSheet.create({
  thumb: {
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    marginTop: 10,
    // height: "90vw"
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  productsList: {
    backgroundColor: "#eee",
    height: "85%"
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});