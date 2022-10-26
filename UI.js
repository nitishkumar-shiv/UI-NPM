import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const UiComponent = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.abc}>
        <Text>Lets Continue with npm!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  abc: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 200,
    backgroundColor: 'blue',
  },
});

export default UiComponent;
