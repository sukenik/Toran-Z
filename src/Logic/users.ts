import dayjs from 'dayjs'
import { iUser } from '../Types/User'
import isBetween from 'dayjs/plugin/isBetween'
import useUpdateUserDate from '../Hooks/useUpdateUserDate'

dayjs.extend(isBetween)
const UTC_PLASTER = 3
const now = dayjs().add(UTC_PLASTER, 'hours')
const startOfNextWeek = dayjs().add(1, 'week').startOf('week')

export const getWinners = (users: iUser[]) => {

	const usersOfCurrentWeek = users.filter(user => (
		dayjs(user.startDate.toDate()).add(UTC_PLASTER, 'hours')
		.isBetween(
			now.startOf('week'),
			now.endOf('week')
		)
	))

	const usersOfPreviousWeek = users.filter(user => (
		dayjs(user.startDate.toDate()).add(UTC_PLASTER, 'hours')
		.isBetween(
			now.subtract(1, 'week').startOf('week'),
			now.subtract(1, 'week').endOf('week')
		)
	))

	const usersOfNextWeek = users.filter(user => (
		dayjs(user.startDate.toDate()).add(UTC_PLASTER, 'hours')
		.isBetween(
			now.add(1, 'week').startOf('week'),
			now.add(1, 'week').endOf('week')
		)
	))

	const currentWinner = getLowestOrderUser(usersOfCurrentWeek)

	if (usersOfCurrentWeek.length > 1 && currentWinner.id) {
		useUpdateUserDate(
			getNextWinnerId(usersOfCurrentWeek, currentWinner.id),
			startOfNextWeek	
		)
	}

	const prevWinner = getHighestOrderUser(usersOfPreviousWeek)
	const nextWinner = getLowestOrderUser(usersOfNextWeek)

	return { currentWinner, prevWinner, nextWinner }
}

const getLowestOrderUser = (users: iUser[]) => {
	return users.find(
		user => user.order === Math.min(...users.map(user => user.order))
	) || {} as iUser
}

const getHighestOrderUser = (users: iUser[]) => {
	return users.find(
		user => user.order === Math.max(...users.map(user => user.order))
	) || {} as iUser
}

const getNextWinnerId = (users: iUser[], currentWinnerId: string) => (
	getLowestOrderUser(users.filter(user => currentWinnerId !== user.id)).id
)