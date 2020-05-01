import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Expenses from "../screens/Expenses";
import Portfolio from "../screens/Portfolio";
import Accounts from "../screens/Accounts";
import Example from "../overlays/Example";
import ShowAllCategories from "../overlays/ShowAllCategories";
import SideBar from "../components/SideBar";
import LinkNewAccount from "../overlays/LinkNewAccount";
import AllStocks from "../overlays/AllStocks";
import Stock from "../overlays/Stock";

const ExpenseStack = createStackNavigator({
  TopCategories: {
    screen: Expenses,
    navigationOptions: {
      title: "Expenses",
      headerStyle: {
        width: "100%",
        backgroundColor: "#1261A0",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    },
  },
  ShowAllCategories: {
    screen: ShowAllCategories,
    navigationOptions: {
      headerTitle: "ShowAllCategories",
    },
  },
});

const AccountStack = createStackNavigator(
  {
    Accounts: {
      screen: Accounts,
      navigationOptions: {
        title: "Bank Accounts",
        headerStyle: {
          width: "100%",
          backgroundColor: "#1261A0",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      },
    },
    NewAccount: {
      screen: LinkNewAccount,
      navigationOptions: {
        headerTitle: "Link New Account",
      },
    },
  },
  {
    initialRouteName: "Accounts",
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }),
  }
);

const PortfolioStack = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: "Portfolio",
      headerStyle: {
        width: "100%",
        backgroundColor: "#1261A0",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    },
  },
  AllStocks: {
    screen: AllStocks,
    navigationOptions: {
      headerTitle: "Your Stocks",
      headerStyle: {
        width: "100%",
        backgroundColor: "#1261A0",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    },
  },
  Stock: {
    screen: Stock,
    navigationOptions: {
      headerTitle: "",
      headerStyle: {
        width: "100%",
        backgroundColor: "#1261A0",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
    },
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    Expenses: {
      screen: ExpenseStack,
      navigationOptions: {
        tabBarLabel: "Expenses",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-albums"}
            />
          </View>
        ),
      },
    },
    Portfolio: {
      screen: PortfolioStack,
      navigationOptions: {
        tabBarLabel: "Portfolio",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-images"}
            />
          </View>
        ),
      },
    },
    Accounts: {
      screen: AccountStack,
      navigationOptions: {
        tabBarLabel: "Accounts",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-book"} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "black",
    barStyle: { backgroundColor: "#1261A0" },
  }
);
const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Landing",
    },
  },
  SignIn: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Sign In",
    },
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Create Account",
    },
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Forgot Password",
    },
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Reset Password",
    },
  },
});

const MainDrawer = createDrawerNavigator(
  {
    Home: TabNavigator,
    Expense: ExpenseStack,
    Portfolio: PortfolioStack,
    Accounts: AccountStack,
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    contentOptions: {
      activeTintColor: "#1261A0",
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
      labelStyle: {
        width: 200,
      },
    },
  }
);

// const AppModalStack = createStackNavigator(
//   {
//     App: MainDrawer,
//     Promotion1: {
//       screen: Example,
//     },
//   },
//   {
//     mode: "modal",
//     headerMode: "none",
//   }
// );

const AppContainer = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: MainDrawer,
  },
});

export default createAppContainer(AppContainer);
