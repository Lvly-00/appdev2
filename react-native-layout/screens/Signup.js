import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Signup = ({ onNavigate }) => {
    // States for password visibility
    // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/login.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                </View>

                <Text style={styles.title}>NEW PLAYER</Text>
                <Text style={styles.subtitle}>Create your character profile</Text>

                {/* Full Name Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="USERNAME"
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="PLAYER EMAIL"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                    />
                </View>

                {/* Password Input with Eye */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="ENTER PASSWORD"
                        placeholderTextColor="#999"
                        // secureTextEntry={!isPasswordVisible}
                    />
                    {/* <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>

                    </TouchableOpacity> */}
                </View>

                {/* Confirm Password Input with Eye */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="CONFIRM PASSWORD"
                        placeholderTextColor="#999"
                        // secureTextEntry={!isConfirmVisible}
                    />
                    {/* <TouchableOpacity onPress={() => setIsConfirmVisible(!isConfirmVisible)}>

                    </TouchableOpacity> */}
                </View>

                {/* Yellow 3D Game Button */}
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
        borderRadius: 80,
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