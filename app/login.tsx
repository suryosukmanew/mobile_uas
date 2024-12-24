import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    TextInput, 
    CheckBox 
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { router, Link } from 'expo-router';

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [rememberMe, setRememberMe] = React.useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        // Implementasikan logika login di sini
        console.log('Logging in with:', { username, password, rememberMe });
    };

    const handleForgotPassword = () => {
        // Implementasikan navigasi ke layar lupa password
        console.log('Navigating to Forgot Password screen');
        router.push('/forgot-password');
    };

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.section}>
                <View style={styles.formContainer}>
                    
                    {/* Welcome Back Text */}
                    <Text style={styles.welcomeText}>Welcome Back!</Text>

                    {/* Username Field */}
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Username"
                        placeholderTextColor="#B9BCC4"
                        onChangeText={setUsername}
                        value={username}
                    />
                    
                    {/* Password Field */}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Password"
                            placeholderTextColor="#B9BCC4"
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                            <Feather
                                name={isPasswordVisible ? 'eye-off' : 'eye'}
                                size={24}
                                color="#989CA8"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Remember Me and Forgot Password */}
                    <View style={styles.optionsContainer}>
                        <View style={styles.rememberMeContainer}>
                            <CheckBox
                                value={rememberMe}
                                onValueChange={setRememberMe}
                                style={styles.checkbox}
                                tintColors={{ true: '#FBA83C', false: '#B9BCC4' }}
                            />
                            <Text style={styles.rememberMeText}>Remember me</Text>
                        </View>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    {/* Optional: Link to Register */}
                    <View style={styles.registerContainer}>
                        <Text style={styles.noAccountText}>
                            Don't have an account?{" "}
                            <Link href='/register' style={styles.signUpLink}>Sign Up</Link>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: "#1B243C", // Dark background
    },
    section: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 60,
    },
    formContainer: {
        alignItems: "center",
        width: "100%",
    },
    welcomeText: {
        fontSize: 32,
        color: "#FFFFFF",
        fontWeight: 'bold',
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        color: "#FFFFFF",
        alignSelf: 'flex-start',
        marginLeft: '12%',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FAD6A5',  // Warna krem
        color: '#1B243C',  // Teks warna gelap
        width: '75%',
        padding: 12,
        paddingLeft: 20,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 30,
    },
    inputContainer: {
        position: 'relative',
        width: '75%',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 18,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        marginBottom: 30,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    rememberMeText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    forgotPasswordText: {
        color: '#FBA83C',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#FBA83C',  // Oranye sesuai gambar
        padding: 15,
        borderRadius: 8,
        width: '75%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    registerContainer: {
        marginTop: 20,
    },
    noAccountText: {
        color: '#B9BCC4',
        fontSize: 14,
        textAlign: 'center',
    },
    signUpLink: {
        color: '#FBA83C',
        fontWeight: 'bold',
    },
});  