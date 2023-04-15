import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { getWinners } from '../Logic/users'
import { iUser } from '../Types/User'

const styles = StyleSheet.create({
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        flex: 1,
        width: '90%'
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

const noWinnerText = 'את הפלי'

interface iWinnersProps {
    users: iUser[]
    textColor: string
}

const Winners: React.FC<iWinnersProps> = ({ users, textColor }) => {
    const { currentWinner, prevWinner, nextWinner } = getWinners(users)

    return (
        <>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <Text style={{ ...styles.dutyName, color: textColor }}>
                        {'התורן הקודם'}
                    </Text>
                    <Text style={{ ...styles.memberName, color: textColor }}>
                        {prevWinner.name ?? noWinnerText}
                    </Text>
                </View>
                <View style={{ marginLeft: 110 }}>
                    <Text style={{ ...styles.dutyName, color: textColor }}>
                        {'התורן הבא'}
                    </Text>
                    <Text style={{ ...styles.memberName, color: textColor }}>
                        {nextWinner.name ?? noWinnerText}
                    </Text>
                </View>
            </ScrollView>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ ...styles.dutyName, color: textColor }}>
                    {'הזוכה'}
                </Text>
                <Text style={{ ...styles.winnerName, color: textColor }}>
                    {currentWinner.name ?? noWinnerText}
                </Text>
            </View>
        </>
    )
}

export default Winners