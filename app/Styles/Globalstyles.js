import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../constants/constants';
const {width, height} = Dimensions.get('window');
export const GlobalStyles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  MainView: {
    backgroundColor: COLORS.themeColor,
    paddingBottom: height * 0.2,
    borderBottomLeftRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
  },
  ProfileView: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginVertical: 36,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  AnimatedProfileView: {
    flexDirection: 'row',
    // paddingHorizontal: 32,
    // marginVertical: 36,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  DUmmyView: {
    paddingHorizontal: 32,
    marginVertical: 20,
  },
  BioView: {
    backgroundColor: COLORS.white,
    marginHorizontal: 32,
    padding: 20,
    borderRadius: 20,
    marginTop: -height * 0.15,
    elevation: 8,
    marginBottom: 16,
  },
  FlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  Bio: {
    marginVertical: 8,
  },
  IconView: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 24,
    padding: 5,
    borderColor: COLORS.themeColor,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProjectsView: {
    backgroundColor: COLORS.themeColor,
    marginHorizontal: 8,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    width: width * 0.7,
  },
  Icons: {
    color: COLORS.white,
    marginLeft: 10,
  },
  SocialIcons: {
    color: COLORS.themeColor,
    borderRadius: 5,
    marginRight: 5,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SplashContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
});
