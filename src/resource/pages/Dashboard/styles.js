import styles from 'styled-components/native';
import { Dimensions , Image, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar,faBars,faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';

const { width } = Dimensions.get('window');

export const ViewHead = styles.View`
    justifyContent:center;
`;

export const SearchIcon = styles(FontAwesomeIcon).attrs({
    icon:faSearch
})`
    color:lightblue;
    alignSelf:center;
    justifyContent:center;
    right: 10px;
`;

export const IconBar = styles(FontAwesomeIcon).attrs({
    icon:faBars
})`
    color:lightblue;
    alignSelf:center;
    justifyContent:center;
    left:10px;
`;


export const Title = styles(Image).attrs({
    source: require('../../../assets/oke.png')
})`
    maxWidth:58%;
    maxHeight:20px;
    justifyContent:center;
    alignSelf:center;
    width:58%;
    height:20px;
    resizeMode:stretch;
`;

export const StarScore = styles(FontAwesomeIcon).attrs(props => ({
    icon: props.rating ? faStar : faStarLine
}))`
 color:#ffa500;
`;

// export const TextValue = ({ l,t,...props}) =>(
// <Text numberOfLines={l} >{t}</Text>
// );