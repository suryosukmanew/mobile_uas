import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window'); // Mendapatkan lebar layar
const images = [
    require('./assets/images/image1.png'), // Ganti dengan nama file gambar Anda
    require('./assets/images/image2.png'),
    require('./assets/images/image3.png'),
];

export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const slide = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(slide);
    };

    return (
        <View style={styles.container}>
            {/* Carousel */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                style={styles.scrollView}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>

            {/* Pagination */}
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

            {/* Text and Button */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>Explore the world easily</Text>
                <Text style={styles.subtitle}>To your desire</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flexGrow: 0,
    },
    imageContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: 300,
        resizeMode: 'contain',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#FF4D4D',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        marginTop: 8,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF4D4D',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});