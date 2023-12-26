import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Screen from '../components/Screen';

function BarcodeScreen(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const getBarCodeScannerPermissions = async () => {
        try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        } catch (error) {
        console.log("Error asking for permission",error);
        }
    };

    useEffect(() => {
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

      if (hasPermission === null) {
        return <AppText>Requesting for camera permission</AppText>;
      }
      if (hasPermission === false) {
        return <AppText>No access to camera</AppText>;
      }

    return (
        <Screen style={styles.Screen}>
          <View style={styles.container}>
              <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{width: "100%", height: "100%"}}
              />
              {!scanned && <AppText style={{color: colors.white, textAlign: "center", fontSize: 14, marginVertical: 10}}>Point your camera at the barcode / qrcode</AppText>}
              {scanned && <AppButton title={'Tap to Scan Again'} style={{
                marginTop: 20,
              }} onPress={() => setScanned(false)} />}
          </View>
            
        </Screen>
    );
    }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    alignSelf: 'center',
    padding: 10,
  },
  Screen: {
    backgroundColor: colors.midnight,
  },
});

export default BarcodeScreen;