import { Image, Box, Pressable, Icon } from "native-base";

// Functional Component with props
const Header = (props) => {
  return (
    <Box 
      bg={"#AA0002"} 
      flexDirection={"row"} 
      justifyContent={"space-between"} 
      p={15}>
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image
          source={require("../assets/menu.png")}
          w={18} h={18}
        />
      </Pressable>
      <Box>
        <Box flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
          <Icon source={require("../assets/facebook.png")}/>
          <Icon source={require("../assets/youtube.png")}/>
          <Icon source={require("../assets/twitter.png")}/>
          <Icon source={require("../assets/search.png")}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;