import { useState, useEffect } from "react";
import AverageList from "../components/AverageList";


export default function StudentAverage(props) {
    let [students, setStudents] = useState([])


    let setAverage = (math, english, chemistry) => {
        let average = (math + english + chemistry) / 3
        return average
    }

    let setStatus = (average) => {
        let status = null
        if (average > 75) {
            status = "Passed"
        } else {
            status = "Failed"
        }
        return status

    }

    useEffect(() => {
        // inisiasi data array Student
        let arrayStudents = [
            { id: 1, name: 'Aira Johnson', math: 80, english: 90, chemistry: 70 },
            { id: 2, name: 'Scarlette Mahatam', math: 40, english: 80, chemistry: 79 },
            { id: 3, name: 'Michael Oka Wahyu', math: 50, english: 87, chemistry: 60 },
            { id: 4, name: 'Mama Zila', math: 70, english: 78, chemistry: 80 },
            { id: 5, name: 'Essa Adila Rahmandito', math: 50, english: 80, chemistry: 56 },

        ]
        setStudents(arrayStudents)

    }, [])

    return (
        <div className="container-fluid card">
            <div className="card-header bg-secondary">
                <h3 className="text-white">Student</h3>
            </div>
            <div className="card-body">
                {students.map(item => (
                    <AverageList
                        id={item.id}
                        name={item.name}
                        math={item.math}
                        english={item.english}
                        chemistry={item.chemistry}
                        average={setAverage(item.math, item.english, item.chemistry)}
                        status={setStatus(setAverage(item.math, item.english, item.chemistry))} >
                    </AverageList>
                ))}
            </div>
        </div>
    )
}