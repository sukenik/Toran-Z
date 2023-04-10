import { collection, getDocs } from 'firebase/firestore'
import db from '../firestore'
import { useEffect, useState } from 'react'
import { iUser } from '../Types/User'

const useGetUsers = (): { loading: boolean, users: iUser[] } => {
	const [loading, setLoading] = useState<boolean>(true)
	const [users, setUsers] = useState<iUser[]>([])

    const getUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'users'))
            querySnapshot.forEach(doc => {
                const { name, order, startDate } = doc.data()
                const user = { name, order, startDate, id: doc.id } as iUser

                if (!users.some(existingUser => existingUser.id === user.id)) {
                    setUsers(prevState => [...prevState, user])
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

	return { loading, users }
}

export default useGetUsers