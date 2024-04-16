import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const User = ({ user }) => {
    const convertirFecha = (fechaString) => {
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
    
        const partes = fechaString.split("-");
        const year = partes[0];
        const month = parseInt(partes[1], 10);
        const day = parseInt(partes[2], 10);
    
        return `${meses[month - 1]} ${day}, ${year}`;
    }
    return (
        <tr>
            <td>{`${user.name} ${user.surnames}`}</td>
            <td>{convertirFecha(user.birthDate)}</td>
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