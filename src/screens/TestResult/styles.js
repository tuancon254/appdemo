import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ResultContainer: {
    paddingLeft: 33,
  },
  Average: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  AverageScore: {
    fontSize: 44,
    color: '#FF7F2D',
    fontWeight: 'bold',
    marginLeft: 9,
  },
  container: {
    flex: 1,
    backgroundColor: '#151522',
    justifyContent:'flex-start'
  },
  ProfileContainer: {
    width: '100%',
    marginTop: 20,
  },
  Chao_mung: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  Menu:{
    paddingTop:20,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  iconMenu:{
    width: 34,
    height: 34
  },
  button:{
    marginRight:25,
    marginTop:15
  },
  result:{
    flex:1,
    paddingLeft:33,
    paddingRight:33
  }
});

export default styles;
