import { Timestamp } from "firebase/firestore"

export type iUser = {
    id: string
    name: string
    order: number
	startDate: Timestamp
}