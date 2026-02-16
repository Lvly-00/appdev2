import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ onNavigate }) => {
    // State for password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                
                {/* Game-style Image Container */}
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/login.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>LOGIN</Text>
                <Text style={styles.subtitle}>Enter your credentials to start</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={24} color="#00ADEF" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="PLAYER EMAIL"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                    />
                </View>

                {/* Password Input with Eye Button */}
                <View style={styles.inputContainer}>
                    <Ionicons name="key" size={24} color="#00ADEF" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="PASSCODE"
                        placeholderTextColor="#999"
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity 
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#00ADEF" 
                        />
                    </TouchableOpacity>
                </View>

                {/* Game Styled Button (Yellow like the lock icon) */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>New Player? </Text>
                    <TouchableOpacity onPress={onNavigate}>
                        <Text style={styles.link}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF', 
    },
    content: {
        flex: 1,
        paddingHorizontal: 100, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        backgroundColor: '#fff',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#00ADEF', 
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#D10056', 
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#003366',
        marginBottom: 30,
        textTransform: 'uppercase',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#00ADEF', 
        paddingHorizontal: 15,
        marginBottom: 15,
        width: '300',
        height: 60,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontWeight: 'bold',
        color: '#333',
    },
    eyeIcon: {
        padding: 5,
    },
    button: {
        backgroundColor: '#FFB703', 
        width: '300',
        height: 60,
        borderRadius: 15,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderColor: '#E29E00', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    footerText: {
        fontWeight: 'bold',
        color: '#333',
    },
    link: {
        color: '#D10056',
        fontWeight: '900',
        textDecorationLine: 'underline',
    },
});

export default Login;