import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar,faBars,faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';
import {ViewHead, SearchIcon, IconBar, Title, StarScore} from './styles';
const DATAVIDEO = [
  {
    id:1,
    url: require('../../../assets/poster.png'),
    title: 'KAGEBUNSIN (ninja abal-abal)',
    country:'ID',
    date : '2020-12-02',
    desc: 'Film kagebunsin yaitu menceritakan kekuatan orang yang kaya ninja namun dia tak mampu menandingi seorang gurunya tongfang yang dapat menyembuhkan segala penyakit dari penyakit rorombehen dan dll. lalu dia mampu mngkloning dirinya sendiri. Bukan hanya itu dia mampu membuat dirinya seperti abal - abal.',
    rating: 21,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: true,
    urlVideo: require('../../../assets/video/1.mp4'),
    
  },
  {
    id:2,
    url: require('../../../assets/1441H.png'),
    title: 'IDUL FITRI 1441H',
    country:'ID',
    date : '2020-12-02',
    desc: 'Idul fitri yang sering kita rayakan ketika setelah ramadhan , yaitu hari raya umat muslim di seluruh dunia tanpa terkecuali. dan di hari raya ini adalah hari dengan penuh rasa kasih sayang yang amat luar biasa , bersama keluarga, sodara, teman, tetangga maupun orang tak di kenal oleh kita sendiri.',
    rating: 95,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: false,
    urlVideo: null,
  },
  {
    id:3,
    url: require('../../../assets/cofee.jpg'),
    title: 'SENJA TAK TERHITUNG',
    country:'ID',
    date : '2020-12-02',
    desc: 'Senja yaitu waktu dimana terbenamnya matahari di situ lah biasana anak senja itu berpuitis dengan puisi nya yang sangat hebat dengan di temani secangkir kopi, namun jangan salah kopi yang mereka minum itu sama saja dengan kopi kopi lain, jadi ya begitulah. Terkadang anak senja itu sangat kreatif.  ',
    rating: 25,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: true,
    urlVideo: require('../../../assets/video/3.mp4'),
    
  },
  {
    id:4,
    url: require('../../../assets/perang.jpg'),
    title: 'PERANG DUNIA KE 1',
    country:'US',
    date : '2020-12-02',
    desc: 'Perang adalah film action yang sangat menarik untuk di tonton namun bahaya kalo di praktekan apalagi anak di bawah umur melihat adegan yang tak ingin di lihat , ini adalah film perang antar RW dan mereka sangat bersemangat ketika melakukan suatu teriakan `AN****` wow itu luar biasa sekali ya , jadi tunggu apalagi, kemon tonton.',
    rating: 4,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: false,
    urlVideo: null,
  },
  {
    id:5,
    url: require('../../../assets/comingsoon.png'),
    title: 'COOMING SOON',
    country:'ID',
    date : '2020-12-07',
    desc: 'COMMING SOON Adalah film berlaga comedy yang ga jelas alurnya mau di bawa kemana padahal alur itu bukan barang suka aneh sih , tapi dalam film ini tokoh utamanya itu membawa alur kemana pun ia pergi, namun ketika dia singgah di suatu tempat ia bertemu dengan orang yang sama ga jelasnya jadi mereka saling memperkenalkan diri, di karenakan tujuan mereka sama jadi mereka berkelana bersama.',
    rating: 100,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: false,
    urlVideo: null,
  },
  {
    id:6,
    url: require('../../../assets/lhooc.jpg'),
    title: 'L.H.O.O.C',
    country:'US',
    date : '2020-12-07',
    desc: 'L.H.O.O.C memiliki arti jika dalam bahasa prancis itu yang artinya " Dia Terangsang ", yaitu sindiran dari sebuah kelompok masyarakat, dan ini masuk dalam aliran lukisan Dadaisme yaitu lukisan figur yang di tampilkan secara acak atau memodeifikasi sebuah objeck yang menjadi sebuah sindiran kepada suatu pemimpin ketika di zamannya.',
    rating: 80,
    quality: 'FHD',
    actor:'Dandi Zusitama Erlangga and friends',
    dataVidio: false,
    urlVideo: null,
  },
  {
    id:7,
    url: require('../../../assets/jojo.jpg'),
    title: 'Jojo The Serius',
    country:'ID',
    date : '2020-12-07',
    desc: 'Siapa yang tidak tahu dengan charakter ini, iya betul yaitu kharakter jojo sang penakluk ular ->>>>> ehh bukan jojo sang penakluk jin, yang biasa membawa jin dan juga memiliki haki pada dirinya yang mampu membuat kekuatan besar , namun dia mempunyai seorang musuh yaitu adik tirinya sendiri yang berusaha mengalahkannya, adiknya sangat antusias sekali.',
    rating: 100,
    quality: 'FHD',
    actor:'Babeh Dickson and friends',
    dataVidio: true,
    urlVideo: require('../../../assets/video/7.mp4'),
  },
];


const Dashboard = ({ navigation }) => {
  const [inDataLoad,inData] = useState(DATAVIDEO);
  const [filterLoad,filterGet] = useState('');
  // const search = (tes) =>{
  //   filterGet(tes);
  // }
  
  function changeSeacrh() {

  }
 const search = (cek) => {
    if (cek == '') {
      inData(DATAVIDEO);
    }else{
      let find = DATAVIDEO.filter(e=>e.id === cek);
      inData(find);
    }
  }

  return (
     <SafeAreaView style={{backgroundColor:'#5d5d5d'}}>
      <View style={{ width:'100%', alignItems: 'center', height: '100%'}}>
        <View style={styles.header}>
           <ViewHead><IconBar onPress={()=>navigation.openDrawer()} /></ViewHead> 
            <Title />
           <ViewHead><SearchIcon /></ViewHead>

        </View>
          <FlatList
            data={inDataLoad}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity onPress={()=> navigation.navigate('Detail',{
                dataFilm:item,
                index
              })} key={index}>
              <View style={{ backgroundColor:'#424242',position:'relative',margin:10,marginTop:index > 0 ? 0 : 10,padding:5,borderRadius:8,height:190, display:'flex', flexDirection:'row'}}>
               <Image source={item.url} resizeMode={'stretch'} style={styles.listImage} />
               <View style={styles.detailVideo}>
                 <Text numberOfLines={1} style={{ fontSize:15, color:'white' }}>{item.title}</Text>
                 <Text numberOfLines={1} style={{ fontSize:10, color:'lightgray' }}>{moment(item.date).format("MMM D, YYYY")} - {item.country}</Text>
                 <View style={{ display:'flex', flexDirection:'row'}}>
                  <Text numberOfLines={1} style={{ fontSize:10, color:'lightgray',alignSelf:'center'}}>Rate : </Text>
                  <StarScore rating={item.rating >= 5 && item.rating <= 20 || item.rating >= 20} />
                  <StarScore rating={item.rating > 20.9 && item.rating <= 40 || item.rating >= 40} />
                  <StarScore rating={item.rating > 40.9 && item.rating <= 60 || item.rating >= 60} />
                  <StarScore rating={item.rating > 60.9 && item.rating <= 80 || item.rating >= 80} />
                  <StarScore rating={item.rating > 80.9 && item.rating <= 100 || item.rating === 100} />
                 </View>
                 <Text numberOfLines={7} style={{ fontSize:12, color:'lightgray' }}>{'   '}{item.desc}</Text>
               </View>
              </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
      </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
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
  }
});

export default Dashboard;
