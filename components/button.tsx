import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export const ButtonTemplate = (props: any) => {
    return (
        <Link href="/login">
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.placeholder}>Let's go</Text>
                </TouchableOpacity>
            </View>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 103,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#5E62DB',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },

    placeholder: {
        color: '#FFFFFF'
    },
});
