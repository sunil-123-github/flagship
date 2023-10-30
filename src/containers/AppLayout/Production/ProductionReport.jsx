import React from "react";
import { useSelector } from "react-redux";

export const ProductionReport = () => {

    const Data = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const arr = Data[0];
    const bb = Data[1];
    const hyd = Data[2];
    const sj = Data[3];
    const lb = Data[4];
    const coup = Data[5];
    const mm = Data[6];
    const clt = Data[7];



    return (
        <div>
            <h6 className="mt-3 p-report"><b>PROUDCTION REPORT</b></h6>
            <hr />
            <table className="mb-4" id="border-table">
                <thead id="production-report">
                    <tr>
                        <th>Component</th>
                        <th>Casting</th>
                        <th>Finishing</th>
                        <th>Manufacturing</th>
                        <th>Quality Assurance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chain Wheel</td>
                        {arr == undefined ? <td>No</td> : <td>{arr[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {arr == undefined ? <td>No</td> : <td>{arr[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {arr == undefined ? <td>Not Started</td> : <td>{arr[2]}%</td>}
                        {arr == undefined ? <td>Not Checked</td> : <td>{arr[1]}</td>}
                    </tr>
                    <tr>
                        <td>Ball Bearing</td>
                        {bb == undefined ? <td>No</td> : <td>{bb[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {bb == undefined ? <td>No</td> : <td>{bb[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {bb == undefined ? <td>Not Started</td> : <td>{bb[2]}%</td>}
                        {bb == undefined ? <td>Not Checked</td> : <td>{bb[1]}</td>}

                    </tr>
                    <tr>
                        <td>Hydraulics</td>
                        {hyd == undefined ? <td>No</td> : <td>{hyd[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {hyd == undefined ? <td>No</td> : <td>{hyd[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {hyd == undefined ? <td>Not Started</td> : <td>{hyd[2]}%</td>}
                        {hyd == undefined ? <td>Not Checked</td> : <td>{hyd[1]}</td>}
                    </tr>
                    <tr>
                        <td>Screw Jack</td>
                        {sj == undefined ? <td>No</td> : <td>{sj[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {sj == undefined ? <td>No</td> : <td>{sj[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {sj == undefined ? <td>Not Started</td> : <td>{sj[2]}%</td>}
                        {sj == undefined ? <td>Not Checked</td> : <td>{sj[1]}</td>}
                    </tr>

                    <tr>
                        <td>Linear Bearing</td>
                        {lb == undefined ? <td>No</td> : <td>{lb[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {lb == undefined ? <td>No</td> : <td>{lb[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {lb == undefined ? <td>Not Started</td> : <td>{lb[2]}%</td>}
                        {lb == undefined ? <td>Not Checked</td> : <td>{lb[1]}</td>}

                    </tr>
                    <tr>
                        <td>Coupling</td>
                        {coup == undefined ? <td>No</td> : <td>{coup[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {coup == undefined ? <td>No</td> : <td>{coup[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {coup == undefined ? <td>Not Started</td> : <td>{coup[2]}%</td>}
                        {coup == undefined ? <td>Not Checked</td> : <td>{coup[1]}</td>}


                    </tr>
                    <tr>
                        <td>Magnet Motor</td>
                        {mm == undefined ? <td>No</td> : <td>{mm[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {mm == undefined ? <td>No</td> : <td>{mm[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {mm == undefined ? <td>Not Started</td> : <td>{mm[2]}%</td>}
                        {mm == undefined ? <td>Not Checked</td> : <td>{mm[1]}</td>}

                    </tr>
                    <tr>
                        <td>Clutch</td>
                        {clt == undefined ? <td>No</td> : <td>{clt[0] == true ? <span>Done</span> : <span>No</span>}</td>}
                        {clt == undefined ? <td>No</td> : <td>{clt[3] == true ? <span>Done</span> : <span>No</span>} </td>}
                        {clt == undefined ? <td>Not Started</td> : <td>{clt[2]}%</td>}
                        {clt == undefined ? <td>Not Checked</td> : <td>{clt[1]}</td>}



                    </tr>
                </tbody>
            </table>
        </div>

    )
}

