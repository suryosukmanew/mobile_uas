import { Text, View, StyleSheet, TextInput, TouchableOpacity, Linking } from "react-native";
import { ButtonTemplate, AlternateLogin } from "@/components";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import React from 'react';

export default function Index() {
    const routeToLogin = () => {
        router.push('/')
    }

    const routeToApple = () => {
        Linking.openURL('https://www.apple.com');
    }

    const routeToGoogle = () => {
        Linking.openURL('https://mail.google.com');
    }

    const routeToFacebook = () => {
        Linking.openURL('https://facebook.com');
    }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const setVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={style.section}>
            <View style={style.container}>
                <View style={style.appLogo}>
                    <Text style={[style.first, style.logoFont]}>Docu</Text>
                    <Text style={[style.last, style.logoFont]}>Flex</Text>
                </View>
                <Text style={style.signText}>Sign In</Text>
            </View>

            <View style={style.form}>
                <Text style={style.label}>Email</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter your email"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                />
                <Text style={style.label}>Password</Text>
                <View style={style.passwordContainer}>
                    <TextInput
                        style={[style.input, style.passwordInput]}
                        placeholder="Enter your password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        maxLength={8}
                    />
                    <TouchableOpacity onPress={setVisibility} style={style.eyeIcon}>
                        <Feather
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="#989CA8"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={style.forgot}>Forgot Password ?</Text>
                <ButtonTemplate
                    title="Submit"
                    onPress={routeToLogin}
                    style={style.button} />

                <View style={style.lineContainer}>
                    <View style={style.hairline} />
                    <Text style={style.orText}>Or</Text>
                    <View style={style.hairline} />
                </View>

                <AlternateLogin title="Continue with Apple"
                    onPress={routeToApple}
                    name='apple'
                />
                <AlternateLogin title="Continue with Google"
                    onPress={routeToGoogle}
                    name='google'
                />
                <AlternateLogin title="Continue with Facebook"
                    onPress={routeToFacebook}
                    name='facebook'
                />

                <Text style={style.createAcc}>Create an Account</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    section: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
    },

    container: {
        alignItems: "center",
    },

    appLogo: {
        flexDirection: 'row',
        marginBottom: 24,
    },

    logoFont: {
        fontSize: 32,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },

    first: {
        color: '#1B243C',
    },

    last: {
        color: '#5E62DB',
    },

    signText: {
        fontSize: 16,
        color: '#1E2842',
    },

    form: {
        width: '100%',
    },

    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },

    input: {
        height: 48,
        borderColor: '#989CA8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 12,
        marginBottom: 16,
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    passwordInput: {
        flex: 1,
    },

    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 12,
    },

    forgot: {
        marginBottom: 16,
        color: '#5E62DB',
        textAlign: 'right',
    },

    button: {
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },

    lineContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    hairline: {
        borderWidth: 0,
        borderColor: '#B9BCC4',
        width: 153,
        borderTopWidth: 1,
    },

    orText: {
        fontSize: 14,
        color: '#4B5368',
    },

    createAcc: {
        color: '#000000',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 34,
    },
});
