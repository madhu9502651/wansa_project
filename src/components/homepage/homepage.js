import React from "react"
import "./homepage.css"

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            {/* <h1>Hello Homepage</h1> */}
            <h1 className="headding"> YOUR CLASSES SCHEDULE</h1>
        <table >
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>DAYS</th>
                    <th  style={{color: "purple",padding:'15px'}}>9.00am to 11.00am</th>
                    <th  style={{color: "purple",padding:'15px'}}>2.00pm to 3.00pm</th>
                    <th  style={{color: "purple",padding:'15px'}}>4.00pm to 5pm</th>
                </tr>
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>MONDAY</th>
                    <td  className="space"> frontend class(2rd year)</td>
                    <td  className="space">backend class(3rd year)</td>
                    <td  className="space">DBMS class(2rd year)</td>
                </tr>
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>TUESDAY</th>
                    <td  className="space">backend class(3rd year)</td>
                    <td  className="space">DBMS class(2rd year)</td>
                    <td  className="space">frontend class(2rd year)</td>
                </tr>
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>WEDNESDAY</th>
                    <td className="space"> DBMS class(2rd year)</td>
                    <td className="space">frontend class(2rd year)</td>
                    <td className="space">backend class(3rd year)</td>
                </tr>
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>THURSDAY</th>
                    <td className="space">backend class(3rd year)</td>
                    <td className="space">frontend class(2rd year)</td>
                    <td className="space">DBMS class(2rd year)</td>
                </tr>
                <tr >
                    <th style={{color: "purple",padding:'15px'}}>FRIDAY</th>
                    <td className="space"> frontend class(2rd year)</td>
                    <td className="space">DBMS class(2rd year)</td>
                    <td className="space">backend class(3rd year)</td>
                </tr>
        </table>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage