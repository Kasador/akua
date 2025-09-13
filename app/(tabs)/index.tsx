import { Text, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Text className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
      </Text>
      <Text className="text-base text-center px-6 text-gray-600 dark:text-gray-300 mb-8">
        Your React Native Expo app with NativeWind is ready to go!
      </Text>
      
      <View className="w-4/5 h-px bg-gray-200 dark:bg-gray-700 my-8" />
      
      {/* <View className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mx-6">

      </View> */}
      
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
