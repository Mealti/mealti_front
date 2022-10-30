/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import useColorScheme from "hooks/useColorScheme";
import ModalScreen from "screens/ModalScreen";
import NotFoundScreen from "screens/NotFoundScreen";
import { LoginScreen, SignUpScreen } from "screens/auth";
import MainScreen from "screens/MainScreen";
import CommunityScreen from "screens/CommunityScreen";
import AccountScreen from "screens/AccountScreen";
import RandomScreen from "screens/RandomScreen";
import MyPageScreen from "screens/MyPageScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  AuthParamList,
  AuthScreenProps,
} from "types/index";
import LinkingConfiguration from "navigation/LinkingConfiguration";

import OnBoarding from "screens/OnBoarding";
import InformationScreen from "screens/auth/InformationScreen";
import LargeText from "components/ui/LargeText";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const authCtx = false; //일단 로그인 하는 페이지부터
  // const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {/* 수정 */}
      {/* {!authCtx && ( */}
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />
      {/* )} */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerTitle: () => <LargeText text="Mealti" /> }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OnBoarding"
    >
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Information" component={InformationScreen} />
    </AuthStack.Navigator>
  );
};
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      // screenOptions={{}}
    >
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        // options={({ navigation }: RootTabScreenProps<"Account">) => ({
        //   title: "가계부",
        //   tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        //   headerRight: () => (
        //     <Pressable
        //       onPress={() => navigation.navigate("Modal")}
        //       style={({ pressed }) => ({
        //         opacity: pressed ? 0.5 : 1,
        //       })}
        //     >
        //       <FontAwesome
        //         name="info-circle"
        //         size={25}
        //         style={{ marginRight: 15 }}
        //       />
        //     </Pressable>
        //   ),
        // })}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Random"
        component={RandomScreen}
        options={{
          headerShown: false,
          // title: "랜덤",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          // title: "메인",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          headerShown: false,
          // title: "커뮤니티",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          headerShown: false,
          // title: "마이페이지",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
