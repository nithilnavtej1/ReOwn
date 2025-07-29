module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: {
          sourceDir: '../node_modules/react-native-vector-icons/Fonts',
          project: 'ios/ReOwnMarketplace.xcodeproj',
        },
        android: {
          sourceDir: '../node_modules/react-native-vector-icons/Fonts',
          fontDir: './src/main/assets/fonts',
        },
      },
    },
  },
};