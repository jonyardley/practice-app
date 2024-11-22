import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";

export default function TabTwoScreen() {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Exersizes</ThemedText>
      </ThemedView>
      <ThemedText>
        Select what exersizes you want to include in your practice sessions.
      </ThemedText>
      <ThemedView style={styles.itemList}>
        <ThemedView style={styles.item}>
          <Checkbox
            value={checkedItems.item1}
            onValueChange={() => handleCheckboxChange("item1")}
          />
          <ThemedText>Item 1</ThemedText>
        </ThemedView>
        <ThemedView style={styles.item}>
          <Checkbox
            value={checkedItems.item2}
            onValueChange={() => handleCheckboxChange("item2")}
          />
          <ThemedText>Item 2</ThemedText>
        </ThemedView>
        <ThemedView style={styles.item}>
          <Checkbox
            value={checkedItems.item3}
            onValueChange={() => handleCheckboxChange("item3")}
          />
          <ThemedText>Item 3</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
