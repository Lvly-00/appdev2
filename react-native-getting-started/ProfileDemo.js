import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.name}>Lovely Heart Pintes</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Course & Section</Text>
        <Text style={styles.value}>
          Bachelor of Science in Information Systems 3-A
        </Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>3x + 5 = 65</Text>

        <Text style={styles.label}>Hobbies</Text>
        <Text style={styles.value}>
          Drawing or sketching{"\n"}
          Painting{"\n"}
          Gaming{"\n"}
          Watching documentaries
        </Text>

        <Text style={styles.label}>Pet Peeves</Text>
         <Text style={styles.value}>People who don’t listen</Text>
         <Text style={styles.value}>Who doesn’t value other people’s time</Text>
         <Text style={styles.value}>Being interrupted while talking</Text>


        <View style={styles.footer}>
          <Text style={styles.footerText}>Profile Demo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEEEEE', // dark background for contrast
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5DAA7', // accent color
    textAlign: 'center',
  },

  divider: {
    height: 2,
    backgroundColor: '#F5DAA7',
    marginVertical: 12,
    borderRadius: 2,
  },

  label: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  value: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
    lineHeight: 22,
  },

  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});
