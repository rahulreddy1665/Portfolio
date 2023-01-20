import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Animated,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, ICONSIZES} from '../constants/constants';
import {GlobalStyles} from '../Styles/Globalstyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import projects from '../helpers/DummyData';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const skillIcons = [
  'language-html5',
  'language-css3',
  'language-javascript',
  'react',
  'nodejs',
  'android-studio',
  'apple-ios',
];

const handleProject = e => {
  if (e !== 'Null') {
    Linking.canOpenURL(e).then(supported => {
      if (supported) {
        Linking.openURL(e);
      } else {
        Toast.show('This app is under maintainence', Toast.LONG);
      }
    });
  } else {
    Toast.show('This app is under maintainence', Toast.LONG);
  }
};

const Home = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top,
          left: 0,
          right: 0,
          backgroundColor: COLORS.themeColor,
          alignItems: 'center',
          opacity: scrollOffsetY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollOffsetY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View style={{marginTop: 5, marginBottom: 5}}>
          <Text style={FONTS.normal}>Rahul Reddy T V</Text>
          <Text style={FONTS.extraSmall}>React Native Developer</Text>
        </View>
      </Animated.View>
      <ScrollView
        style={GlobalStyles.ScrollView}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.themeColor}
        />
        {/* Main View */}
        <View style={[GlobalStyles.MainView]}>
          <View style={GlobalStyles.ProfileView}>
            <Image
              style={GlobalStyles.ProfileImage}
              source={require('../../assets/user.png')}
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
              A mobile app developer with 1.7 years of experience in developing
              and maintaining iOS and Android applications. Strong skills in
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
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: 24}}
          style={{flex: 1}}>
          {projects.map(project => (
            <View style={GlobalStyles.ProjectsView} key={project.name}>
              <View style={{flex: 1}}>
                <View style={GlobalStyles.Row}>
                  <Text style={[FONTS.normal, {marginTop: 4}]}>
                    {project.name}
                  </Text>
                  {project.name !== 'Viprabandhana' ? (
                    <MaterialCommunityIcons
                      name={project.icon}
                      size={22}
                      style={GlobalStyles.Icons}
                    />
                  ) : (
                    <MaterialIcon
                      name={project.icon}
                      size={22}
                      style={GlobalStyles.Icons}
                    />
                  )}
                </View>
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Text
                    style={[
                      FONTS.small,
                      {color: COLORS.white, textAlign: 'center'},
                    ]}>
                    {project.description}
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => handleProject(project.link)}>
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
            <TouchableOpacity
              onPress={() =>
                handleProject(
                  'https://instagram.com/rahulweezy?igshid=MWI4MTIyMDE=}',
                )
              }>
              <MaterialCommunityIcons
                name="facebook"
                size={30}
                style={GlobalStyles.SocialIcons}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleProject('https://www.facebook.com/reddy.sc.3')
              }>
              <MaterialCommunityIcons
                name="instagram"
                size={30}
                style={GlobalStyles.SocialIcons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleProject(
                  'https://instagram.com/rahulweezy?igshid=MWI4MTIyMDE=}',
                )
              }>
              <MaterialCommunityIcons
                name="twitter"
                size={30}
                style={GlobalStyles.SocialIcons}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
