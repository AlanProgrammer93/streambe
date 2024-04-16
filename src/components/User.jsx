import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const User = ({ user }) => {
    return (
        <tr>
            <td>{`${user.name} ${user.surnames}`}</td>
            <td>{user.birthDate}</td>
            <td>
                {
                    user.photo ? (
                        <img src={user.photo} />
                    ) : (
                        <FaUserCircle />
                    )
                }
            </td>
        </tr>
    )
}

export default User