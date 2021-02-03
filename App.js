import React, { Suspense,Fragment, useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Button
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const Main = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 10 * 1000)).then(
    () => import('./src/resource/index')
  )
});


function LoadingState(props) {
  const [valLoad,loadVal] = useState(new Animated.Value(0));
  const spinAnimation = () =>{
   valLoad.setValue(0);
    Animated.sequence([
      Animated.timing(
          valLoad,
          {
            toValue : 1,
            duration:1000,
            useNativeDriver: true,
          }
        )
    ]).start(()=>spinAnimation());
  }

  useEffect(() => {
    spinAnimation()
  });

  return(
    <SafeAreaView style={{backgroundColor:'#424242'}}>
     <View style={{ width:'100%', alignItems: 'center', height: '100%',justifyContent:'center'}}>
       <View style={{ width:150,height:150,justifyContent:'center',alignItems:'center' }}>
       <Animated.Image source={require('./src/assets/loading.png')} style={[styles.lingkaran,{transform : [{rotate:  valLoad.interpolate({
              inputRange: [0,1],
              outputRange: ['0deg','360deg']
             })}]}]}></Animated.Image>
            <Animated.Image
              source={require('./src/assets/lg.png')}
              style={{position:'absolute',width: 81, height: 90,resizeMode:'stretch',opacity: valLoad.interpolate({
                inputRange: [0,1],
                outputRange: [0.2,1]
               })}}
               />
            {props.internet === false && <View><Button onPress={_=>props.checkInet()} title="Reload" /></View> }
       </View>
     </View>
    </SafeAreaView>
  )
}

const App = () => {
  const [connect,connectVal] = useState(false)
  useEffect(() => {
    checkInet()
  });

  function checkInet() {
    NetInfo.fetch().then(state => {
      connectVal(state.isConnected)
    });
  }

  return (
    <Fragment>
      {!connect?
        <LoadingState internet={connect} checkInet={checkInet}/> :      
      <Suspense fallback={<LoadingState />}>
           <Main />
      </Suspense>
          }
    </Fragment>
  );
}

export default App;

const styles = StyleSheet.create({
  lingkaran:{
    width: 150,
    height:150,
    position:'absolute',
    // borderTopWidth:10,
    // borderBottomWidth:10,
    borderColor:'#77a8da',
    borderRadius:100,
    transform: [{rotate:'0deg'}]
  }
});

