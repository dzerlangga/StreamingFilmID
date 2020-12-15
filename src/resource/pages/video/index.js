import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar,faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';
const Detail = ({ route,navigation }) => {
    const {id, country, date, desc, title, rating ,url,quality,dataVidio,urlVideo,actor} = route.params.dataFilm;
  return (
     <SafeAreaView style={{backgroundColor:'#5d5d5d'}}>
      <View style={{ width:'100%', alignItems: 'center', height: '100%'}}>
        <View style={styles.header}>
           <FontAwesomeIcon style={[styles.headButton,{left:'25%'}]} onPress={()=>navigation.navigate('Dashboard')} icon={faArrowLeft} />
            <Text numberOfLines={1} style={[styles.white,{flex:0,textAlign:'center',width:'70%',justifyContent:'center',alignSelf:'center'}]}>{title.toUpperCase()}</Text>
           <FontAwesomeIcon style={[styles.headButton,{right:'25%'}]} icon={faBars} onPress={()=> alert('Cooming Soon')} />
        </View>

            <ScrollView style={{ width:'100%' }}>
        <View style={{backgroundColor:'#424242',position:'relative',margin:10,padding:5,borderRadius:8, display:'flex', flexDirection:'row'}}>
                <View style={{ height:'100%',width:'100%',justifyContent:'center',alignContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <Image source={url} resizeMode={'stretch'} style={{width:'80%',height:390,marginTop:10,maxWidth:300, borderRadius:8 }} />

                    <Text style={[styles.white,{fontSize:20,margin:10}]}>{ title }</Text>
                    <Text style={[styles.lightGray,{fontSize:12,paddingLeft:10, paddingRight:10}]}>{'   '}{ desc }</Text>
                    <View style={{ justifyContent:'flex-start',width:'100%', paddingLeft:10, paddingRight:10 }}>
                        <View style={{ display:'flex', flexDirection:'row'}}>
                         <Text numberOfLines={1} style={{ fontSize:12, color:'lightgray',alignSelf:'center'}}>Rate : </Text>
                         <FontAwesomeIcon style={styles.orange} icon={rating >= 5 && rating <= 20 || rating >= 20 ? faStar : faStarLine} />
                         <FontAwesomeIcon style={styles.orange} icon={rating > 20.9 && rating <= 40 || rating >= 40 ? faStar : faStarLine} />
                         <FontAwesomeIcon style={styles.orange} icon={rating > 40.9 && rating <= 60 || rating >= 60? faStar : faStarLine} />
                         <FontAwesomeIcon style={styles.orange} icon={rating > 60.9 && rating <= 80 || rating >= 80? faStar : faStarLine} />
                         <FontAwesomeIcon style={styles.orange} icon={rating > 80.9 && rating <= 100 || rating === 100? faStar : faStarLine} />
                        </View>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Genre : Comedy </Text>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Director : DLL </Text>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Actor : { actor }</Text>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Country : ID</Text>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Duration : 1H</Text>
                        <Text style={[styles.lightGray,{fontSize:12,width:'30%'}]}>Quality : <View style={[styles.quality]}><Text style={{ fontSize:10 , color:'white'}}>{quality}</Text></View></Text>
                        <Text style={[styles.lightGray,{fontSize:12}]}>Release : {moment(date).format('MMM D, YYYY')}</Text>
                        <View style={{ width:'60%',margin:20,alignSelf:'center', justifyContent:'center' }}>
                          <Button title={dataVidio ? 'Tonton' : 'Belum Ada Video'} disabled={!dataVidio} onPress={()=>navigation.navigate('ShowVid',{
                            idVideo: urlVideo
                          })}/>
                        </View>
                    </View>
                </View>
        </View>
            </ScrollView>
        
      </View>
     </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  header: {
    backgroundColor:'#424242',
    width:'100%', 
    height:50,
    maxHeight:'15%',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row', 
    padding:10,
    shadowOffset: {
      width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 11,
  },
  white:{
    color:'white'
  },
  lightGray:{
    color:'lightgray'
  },
  listImage:{
    borderRadius:10, 
    width:'35%',
    height:'100%',
    maxWidth:140,
  },
  detailVideo:{
    width:'65%',
    padding:5,
    maxWidth:'100%',
  },
  orange:{
    color:'#ffa500',
  },
  headButton:{
    color:'lightblue', 
    alignSelf:'center',
    position:'relative',
  },
  quality:{
    width:'100%',
    backgroundColor:'black',
    borderRadius:4,
    shadowOffset: {
      width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 11,
  }
});

export default Detail;
