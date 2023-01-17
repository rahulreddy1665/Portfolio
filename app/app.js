import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, ICONSIZES} from './constants/constants';
import {GlobalStyles} from './Styles/Globalstyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const skillIcons = [
  'language-html5',
  'language-css3',
  'language-javascript',
  'react',
  'nodejs',
];
const projects = [
  {
    name: 'LMS',
    icon: 'book',
  },
  {
    name: 'Royal perkk',
    icon: 'account-network',
  },
  {
    name: 'Royal Volunteers',
    icon: 'blood-bag',
  },
  {
    name: 'Viprabandhana',
    icon: 'supervised-user-circle',
  },
  {
    name: 'Ready Vet',
    icon: 'doctor',
  },
  {
    name: 'Connect me',
    icon: 'robot',
  },
];
const App = () => {
  return (
    <ScrollView style={GlobalStyles.ScrollView}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.themeColor} />
      {/* Main View */}
      <View style={GlobalStyles.MainView}>
        <View style={GlobalStyles.DUmmyView}></View>
        <View style={GlobalStyles.ProfileView}>
          <Image
            style={GlobalStyles.ProfileImage}
            source={require('../assets/user.png')}
          />
          <View>
            <Text style={FONTS.normal}>Rahul Reddy T V</Text>
            <Text style={FONTS.extraSmall}>React Native Developer</Text>
          </View>
        </View>
      </View>
      <View style={GlobalStyles.BioView}>
        <View style={GlobalStyles.FlexRow}>
          <Text style={[FONTS.normal, {color: COLORS.black}]}>Bio</Text>
          <FontAwesomeIcon
            name="user"
            size={ICONSIZES.small}
            color={COLORS.black}
            style={{marginRight: 10}}
          />
        </View>
        <View style={GlobalStyles.Bio}>
          <Text style={FONTS.small}>
            A mobile app developer with 2 years of experience in developing and
            maintaining iOS and Android applications. Strong skills in
            Javascript, React, and React Native, as well as experience with
            Agile development methodologies
          </Text>
        </View>
      </View>

      <View style={[GlobalStyles.BioView, {marginTop: 0}]}>
        <View style={GlobalStyles.FlexRow}>
          <Text style={[FONTS.normal, {color: COLORS.black}]}>Skills</Text>
          <FontAwesome5
            name="pen"
            size={ICONSIZES.small}
            color={COLORS.black}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 8}}>
          {skillIcons.map(skill => (
            <View key={skill} style={GlobalStyles.IconView}>
              <MaterialCommunityIcons
                name={skill}
                size={30}
                style={{
                  color: COLORS.themeColor,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 24}}>
        {projects.map(project => (
          <View style={GlobalStyles.ProjectsView} key={project.name}>
            <Text style={FONTS.normal}>{project.name}</Text>
            <MaterialCommunityIcons
              name={project.icon}
              size={150}
              style={GlobalStyles.Icons}
            />
            <TouchableOpacity>
              <View style={{backgroundColor: COLORS.white, borderRadius: 8}}>
                <Text
                  style={{
                    color: COLORS.themeColor,
                    fontSize: 16,
                    padding: 8,
                  }}>
                  View Project
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={[GlobalStyles.BioView, {marginTop: 0}]}>
        <View style={GlobalStyles.FlexRow}>
          <Text style={[FONTS.normal, {color: COLORS.black}]}>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 8,
            alignItems: 'flex-end',
          }}>
          <Text style={{color: COLORS.gray}}>PROJECTS DONE </Text>
          <Text style={{fontSize: 50, color: COLORS.themeColor}}>11</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 8,
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 50, color: COLORS.themeColor}}>11</Text>
          <Text style={{color: COLORS.gray}}> HAPPY CLIENTS</Text>
        </View>
      </View>
      <View style={[GlobalStyles.BioView, {marginTop: 0}]}>
        <View style={GlobalStyles.FlexRow}>
          <Text style={[FONTS.normal, {color: COLORS.black}]}>
            Connect With Me
          </Text>
          <FontAwesomeIcon name="user-plus" size={20} />
        </View>
        <ScrollView horizontal style={{marginVertical: 8}}>
          <MaterialCommunityIcons
            name="facebook"
            size={30}
            style={{
              color: COLORS.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
          <MaterialCommunityIcons
            name="twitter"
            size={30}
            style={{
              color: COLORS.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
          <MaterialCommunityIcons
            name="instagram"
            size={30}
            style={{
              color: COLORS.themeColor,
              borderRadius: 5,
              marginRight: 5,
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default App;
