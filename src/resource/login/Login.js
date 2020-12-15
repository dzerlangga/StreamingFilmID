import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash, faSortDown } from '@fortawesome/free-solid-svg-icons';

const dim = Dimensions.get('window');
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: true,
      orientation: null
    };
    this.showPass = this.showPass.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  showPass(){
    this.setState({
      show: !this.state.show
    }) 
  }
  
  componentDidMount(){
    if (this.state.orientation === null) {
     this.setState({
       orientation: dim.width<dim.height
      })
    }
      Dimensions.addEventListener('change', ({window:{width,height}})=>{
        this.setState({
          orientation: width<height
        })
      })
    }

    render(){
      const { show, orientation } = this.state;
      const { navigation } = this.props;
      return (
        <SafeAreaView style={{backgroundColor:'#424242',flex: 1}}>
          <ScrollView>
            <View style={{ width:'100%', alignItems: 'center', height: '100%',justifyContent:'center'}}>
              <View>
                <Image source={require('../../assets/oke.png')} style={[styles.title,{ marginTop: orientation ? '30%' : '20%' }]} />
                {!orientation ? <View style={{ marginTop:'5%' }}><Text style={{ color:'white', alignSelf:'center' }}>Scroll Down</Text><FontAwesomeIcon icon={ faSortDown } style={{ color:'white',alignSelf:'center'}}/></View> : null }
              </View>
              <View style={styles.bodyLogin}>
                  <View style={styles.iconLogin}>
                    <Image
                      source={require('../../assets/lg.png')}
                      style={{width: 61, height: 70,resizeMode:'stretch'}}
                      />
                  </View>
                  <View style={styles.form}>
                    <View style={[styles.inForm,{height:'35%'}]}>
                      <View style={styles.input}>
                        <TextInput placeholder='USERNAME' style={styles.inputUser}></TextInput>
                      </View>
                      <View style={styles.input}>
                        <TextInput secureTextEntry={show} placeholder='PASSWORD' style={styles.inputPass}></TextInput>
                        <View style={styles.showPassIcon}>
                          <FontAwesomeIcon icon={ show ? faEye : faEyeSlash } onPress={this.showPass} style={styles.iconPass}/>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.inForm,{margin:30 }]}>
                      <Button title="Masuk" color="#8545a7" onPress={()=>navigation.navigate('Main')} />
                    </View>
                 
                  </View>
              </View>
            </View>
            <View>
             <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.register}>
               <Text style={{ color:'#77a8da' }}>HAVE YOU AN ACCOUNT? <Text style={{ color:'white' }}>CREATE ONE</Text></Text>
             </TouchableOpacity>
           </View>
          </ScrollView>
         </SafeAreaView>
      )
    };
};

const styles = StyleSheet.create({
  bodyLogin: {
    backgroundColor: '#5d5d5d',
    height:350,
    width:'80%',
    display:'flex',
    borderRadius: 8,
    shadowColor: "#000",
    marginTop:'30%',
    marginBottom:'30%',
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 11,
  },
  title:{
    maxWidth:500,
    maxHeight:40,
    width:300,
    height:30,
    resizeMode:'stretch'
  },
  iconLogin: {
    position: 'relative',
    top:-58,
    width:'100%',
    zIndex:3,
    backgroundColor: '#5d5d5d',
    height: 130,
    width: 130,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderColor : '#424242',
    borderWidth: 9,
  },
  form:{
    justifyContent:'flex-end',
    height:'100%',
    position:'relative',
    top:'-37%'
  },
  inForm:{
    justifyContent:'space-between',
    maxWidth:1900,
    position:'relative',
    alignSelf:'center',
    width:'80%',
  },
  input:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  inputUser: {
    borderWidth: 2,
    textAlign:'center', 
    borderColor:'#f0f8ff00', 
    borderRadius:7,
    backgroundColor:'#77a8da',
    color:'white', 
    width:'100%',
    alignSelf:'center'
  },
  showPassIcon: {
    position:'absolute', 
    color:'#424242',
    backgroundColor:'#77a8da', 
    width:48.7,
    borderRadius:7,
    alignItems:'center',
    height:48,
    justifyContent:'center',
    top:2, 
    zIndex:5
  },
  iconPass: {
    color:'#5d5d5d'
  },
  inputPass: {
    borderColor:'#f8f9fa00' ,
    borderWidth: 2,
    textAlign:'center',
    borderRadius:7,
    backgroundColor:'#77a8da',
    color:'white', 
    width:'100%',
    alignSelf:'center'
  },
  register:{
    position:'relative',
    top:'-500%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    zIndex:10
  }
 
});

