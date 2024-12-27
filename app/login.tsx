import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('Register'); // Navigasi ke halaman register
    };

    const handleRegisterNow = () => {
        navigation.navigate('Register'); // Navigasi ke halaman register
    };

    return (
        <View style={styles.container}>
            {/* Gambar Header */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('./assets/images/loginHeader.png')} // Ganti dengan nama file gambar header
                    style={styles.image}
                />
            </View>

            {/* Teks Selamat Datang */}
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to access your account</Text>

            {/* Input Email */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#B0B0B0"
                    value={email}
                    onChangeText={setEmail}
                />
                <Image
                    source={require('./assets/images/emailIcon.png')} // Ganti dengan nama file gambar ikon email
                    style={styles.icon}
                />
            </View>

            {/* Input Password */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#B0B0B0"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                        source={
                            showPassword
                                ? require('./assets/images/showIcon.png') // Ikon buka mata
                                : require('./assets/images/hideIcon.png') // Ikon tutup mata
                        }
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {/* Tombol Remember Me dan Lupa Password */}
            <View style={styles.row}>
                <Text style={styles.rememberMe}>Remember me</Text>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            {/* Tombol Next */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>

            {/* Teks Daftar */}
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>New Member? </Text>
                <TouchableOpacity onPress={handleRegisterNow}>
                    <Text style={styles.registerLink}>Register now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginVertical: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        paddingVertical: 12,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#B0B0B0',
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    rememberMe: {
        fontSize: 14,
        color: '#666666',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#FF4D4D',
    },
    nextButton: {
        backgroundColor: '#FF4D4D',
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerText: {
        fontSize: 14,
        color: '#666666',
    },
    registerLink: {
        fontSize: 14,
        color: '#FF4D4D',
        fontWeight: 'bold',
    },
});
