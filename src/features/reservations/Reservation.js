import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

// import { useSelector } from 'react-redux'
// import { selectUserById } from './usersApiSlice'

import { useGetReservationsQuery } from './reservationApiSlice'
import { memo } from 'react'
e
const Reservation = ({ ReservationId }) => {
    // const user = useSelector(state => selectUserById(state, userId))

    const { Reservation } = useGetReservationsQuery("ReservationsList", {
        selectFromResult: ({ data }) => ({
            Reservation: data?.entities[ReservationId]
        })
    })


    const navigate = useNavigate()

    if (Reservation) {
        const handleEdit = () => navigate(`/dash/reservation/${ReservationId}`)

        // const userRolesString = user.roles.toString().replaceAll(',', ', ')

        // const cellStatus = user.active ? '' : 'table__cell--inactive'

        return (
            <tr className="table__row user">
                <td className={`table__cell ${cellStatus}`}>{Reservation.username}</td>
                <td className={`table__cell ${cellStatus}`}>{userRolesString}</td>
                <td className={`table__cell ${cellStatus}`}>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedReservation = memo(Reservation)


export default memoizedReservation