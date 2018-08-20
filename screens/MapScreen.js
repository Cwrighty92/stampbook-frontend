import React, { Component } from "react";
import { View, NavigationBar, Icon, Title } from "@shoutem/ui";

class MapScreen extends Component {
  render() {
    return (
      <View>
        <NavigationBar
          leftComponent={<Icon name="sidebar" />}
          centerComponent={<Title>Achievements</Title>}
        />
        {/* <Button onPress={() => this.props.navigation.navigate("Settings")}>
          <Text>Go to Settings</Text>
        </Button> */}
      </View>
    );
  }
}

export default MapScreen;
