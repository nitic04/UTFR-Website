import React from "react";
import { NavLink } from "react-router-dom";

const PreviousTeamPages = () => {
    return (
        <div className="flex items-center pt-8 px-8 gap-x-8">
            <p className='text-3xl font-bold flex justify-left'>Previous Teams:</p>
            <NavLink to="/team"><p className='text-3xl flex transition duration-200 hover:text-gray-300 font-bold'>2022 - 2023</p></NavLink>
            <NavLink to="/team"><p className='text-3xl flex transition duration-200 hover:text-gray-300 font-bold'>2023 - 2024</p></NavLink>
            <NavLink to="/team"><p className='text-3xl flex transition duration-200 hover:text-gray-300 font-bold'>2024 - 2025</p></NavLink>
        </div>
    )
}
export default PreviousTeamPages;