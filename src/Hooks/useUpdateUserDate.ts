import { updateDoc, doc, Timestamp } from 'firebase/firestore'
import db from '../firestore'
import { Dayjs } from 'dayjs'

const useUpdateUserDate = async (userId: string, date: Dayjs) => {
	const userRef = doc(db, 'users', userId)

	try {
		await updateDoc(userRef, { startDate: Timestamp.fromDate(date.toDate()) })
		console.log('User startDate updated with ID: ', userRef.id)
	} catch (e) {
		console.error('Error updating user: ', e)
	}
}

export default useUpdateUserDate