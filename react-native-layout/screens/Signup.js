import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ onNavigate }) => {
    // States for password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* ScrollView used to ensure inputs are accessible on smaller screens */}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                {/* Profile/Avatar Wrapper */}
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/cat.gif')} // Reusing the same image as a "New Player" avatar
                        style={styles.image}
                        resizeMode="contain"
                    />
               
                </View>

                <Text style={styles.title}>SIGN UP</Text>
                <Text style={styles.subtitle}>Create your character profile</Text>

                {/* Full Name Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="#00ADEF" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="USERNAME"
                        placeholderTextColor="#999"
                    />
                </View>

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

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Ionicons name="key" size={24} color="#00ADEF" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CHOOSE PASSWORD"
                        placeholderTextColor="#999"
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#00ADEF" 
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password Input  */}
                <View style={styles.inputContainer}>
                    <Ionicons name="shield-checkmark" size={24} color="#00ADEF" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CONFIRM PASSWORD"
                        placeholderTextColor="#999"
                        secureTextEntry={!isConfirmVisible}
                    />
                    <TouchableOpacity onPress={() => setIsConfirmVisible(!isConfirmVisible)}>
                        <Ionicons 
                            name={isConfirmVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#00ADEF" 
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already a member? </Text>
                    <TouchableOpacity onPress={onNavigate}>
                        <Text style={styles.link}>LOG IN</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF', 
    },
    scrollContent: {
        paddingHorizontal: 50,
        paddingVertical: 100,
        alignItems: 'center',
    },
    imageWrapper: {
        backgroundColor: '#fff',
        // borderRadius: 80,
        borderWidth: 5,
        borderColor: '#00ADEF',
        padding: 5,
        marginBottom: 15,
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 10,
    },
    image: {
        width: 120,
        height: 120,
    },
  
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#D10056', 
        letterSpacing: 1,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#003366',
        marginBottom: 25,
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
        marginBottom: 12,
        width: '100%',
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
    button: {
        backgroundColor: '#FFB703', 
        width: '100%',
        height: 60,
        borderRadius: 15,
        borderBottomWidth: 6,
        borderRightWidth: 3,
        borderColor: '#E29E00', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 1,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 30,
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

export default Signup;