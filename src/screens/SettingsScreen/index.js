import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: wp(0),
  },
});
