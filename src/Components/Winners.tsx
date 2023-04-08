import { ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      flex: 1,
      columnGap: 5
    },
    dutyContainer: {
        display: 'flex',
    },
    winnerContainer: {
        top: 80
    },
    dutyName: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Alef-Regular'
    },
    memberName: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Alef-Regular'
    },
    winnerName: {
        fontSize: 60,
        fontFamily: 'Alef-Bold'
    }
})
  
const Winners = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.dutyContainer}>
            <Text style={styles.dutyName}>{'התורן הבא'}</Text>
            <Text style={styles.memberName}>אלון</Text>
        </View>
        <View style={styles.winnerContainer}>
            <Text style={styles.dutyName}>{'הזוכה'}</Text>
            <Text style={styles.winnerName}>עמית</Text>
        </View>
        <View style={styles.dutyContainer}>
            <Text style={styles.dutyName}>{'התורן הקודם'}</Text>
            <Text style={styles.memberName}>סוקניק</Text>
        </View>
    </ScrollView>
  )
}

export default Winners