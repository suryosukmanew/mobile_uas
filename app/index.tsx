import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { ButtonTemplate } from "@/components";
import { router } from 'expo-router';

export default function Index() {
  // Navigasi ke halaman login (halaman kedua)
  const routeToLogin = () => {
    router.push('/login'); // Halaman kedua
  }

  // Navigasi ke halaman registrasi (halaman ketiga)
  const routeToRegister = () => {
    router.push('/register'); // Halaman ketiga
  }

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/?locale=id_ID'); // URL halaman Facebook
  }

  const openGoogle = () => {
    Linking.openURL('https://myaccount.google.com/?hl=in&pli=1'); // URL halaman Google
  }

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/dikaraaa_13/?__pwa=1'); // URL halaman Instagram
  }

  return (
    <View style={style.section}>
      <Image
        style={style.welcomeImg}
        source={require('./assets/images/logo_welcome.png')}
      />
      <Text style={[style.welcomeText, style.welcomeTextAll]}>Hello, Welcome!</Text>
      <Text style={[style.welcomeTextSub, style.welcomeTextAll]}>
        Welcome to codeChamp, a top platform for coders
      </Text>
      
      {/* Tombol Login (ke halaman kedua) */}
      <ButtonTemplate
        title="Login"
        onPress={routeToLogin} // Mengarahkan ke halaman kedua
        style={style.loginButton}
      />
      
      {/* Tombol Sign Up (ke halaman ketiga) */}
      <ButtonTemplate
        title="Sign Up"
        onPress={routeToRegister} // Mengarahkan ke halaman ketiga
        style={style.signupButton}
      />

      <Text style={style.socialText}>Or via social media</Text>

      <View style={style.socialContainer}>
        {/* Tombol Facebook */}
        <TouchableOpacity style={style.socialIcon} onPress={openFacebook}>
          <Image
            style={style.socialImage}
            source={require('./assets/images/fb_logo.png')} // Ganti dengan link gambar logo Facebook
          />
        </TouchableOpacity>

        {/* Tombol Google */}
        <TouchableOpacity style={style.socialIcon} onPress={openGoogle}>
          <Image
            style={style.socialImage}
            source={require('./assets/images/ggl_logo.png')} // Ganti dengan link gambar logo Google
          />
        </TouchableOpacity>

        {/* Tombol Instagram */}
        <TouchableOpacity style={style.socialIcon} onPress={openInstagram}>
          <Image
            style={style.socialImage}
            source={require('./assets/images/ig_logo.png')} // Ganti dengan link gambar logo Instagram
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C1446", // Sama dengan background gambar
  },

  welcomeTextAll: {
    marginTop: 8,
    fontFamily: "sans-serif",
    color: '#FFFFFF',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  welcomeTextSub: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 20,
  },

  welcomeImg: {
    width: 321,
    height: 249,
  },

  loginButton: {
    backgroundColor: "#FAD6A5", // Warna tombol dari gambar
    width: 200,
    padding: 15,
    borderRadius: 330,
    marginBottom: 10,
  },

  signupButton: {
    backgroundColor: "#FAD6A5", // Warna tombol yang sama untuk signup
    width: 200,
    padding: 15,
    borderRadius: 330,
    marginBottom: 20,
  },

  socialText: {
    color: "#FFFFFF",
    marginBottom: 10,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },

  socialIcon: {
    width: 21,
    height: 21,
    backgroundColor: '#FAD6A5', // Warna background tombol
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialImage: {
    width: 24,  // Ukuran logo
    height: 24,
    resizeMode: 'contain',
  },
});
