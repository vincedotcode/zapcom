import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');  
        }, 3000);  
        return () => clearTimeout(timer); 
    }, [navigation]);

    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 flex justify-around my-4">
                <View className="flex-row justify-center">
                    <Image source={require("../assets/logo.png")}
                        style={{ width: 300, height: 100 }} />
                </View>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/welcome.png")}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View className="space-y-1">
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold text-xl text-center" style={{ fontFamily: "Poppins_700Bold" }}>Launching your online presence, effortlessly</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}