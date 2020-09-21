import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView , Button , View ,Picker ,Switch} from 'react-native';
const App = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  const [choosenLabel, setChoosenLabel] = useState('Native');
  const [choosenIndex, setChoosenIndex] = useState('2');
  const onPressLearnMore = () => {
    alert('Hello');
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={pickers.container}>
        <Picker
          selectedValue={choosenLabel}
          onValueChange={(itemValue, itemIndex) => {
            setChoosenLabel(itemValue);
            setChoosenIndex(itemIndex);
          }}>
          <Picker.Item label="Hello" value="Hello" />
          <Picker.Item label="React" value="React" />
          <Picker.Item label="Native" value="Native" />
          <Picker.Item label="How" value="How" />
          <Picker.Item label="are" value="are" />
          <Picker.Item label="you" value="you" />
        </Picker>
        <Text style={pickers.text}>Selected Value: {choosenLabel}</Text>
        <Text style={pickers.text}>Selected Index: {choosenIndex}</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 30 }}>
        ScrollView
        </Text>
      </ScrollView>
      <View style={styles.container}>
        <Button
         onPress={onPressLearnMore}
         title="Button"
         color="#841584"
        />
      </View>
      <View style={switchs.container}>
        <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
        <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
    
  );
};
const switchs = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const pickers = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
const buttons = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#ecf0f1',
  },
});
export default App;