import { useState, useEffect } from "react"
/*
useState digunakan untuk mendefiniskan state
useEffect sebuah fungsi yang dijalankan (dieksekusi) ketika komponennya telah ditampilkan

*/
import { Modal } from "bootstrap";

function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState(0)
    let [action, setAction] = useState("")

    useEffect(() => {
        //inisiasi data array student
        let arrayStudents = [
            { id: 1, name: "Soeji", birthdate: 2004 },
            { id: 2, name: "Faiz Wibu", birthdate: 1992 }
        ]
        setStudents(arrayStudents)

        //inisiasi state modal studnet
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    //function add student

    let addStudent = () => {
        //open modal
        modalStudent.show()

        //reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate(0)
        setAction("insert")
    }

    // function save student
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id,
                name: name,
                birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add new data
            temp.push(newData)        
            // store to student again 
            setStudents(temp)
        }
    }
    return (
        <div>
            <div className="card col-10">
                <div className="card-header bg-success">
                    <h3 className="text-white">
                        List of My Student
                    </h3>
                </div>
                <div className="card-body">
                    {/*
                    .map adalah sebuah fungsi dari array untuk scanning setiap data dalam array
                    */}
                    {students.map(item => (
                        <div className="row" key={`key${item.id}`}>
                            <div className="col-2">
                                <small>
                                    ID
                                </small>
                                <h5>
                                    {item.id}
                                </h5>
                            </div>
                            <div className="col-4">
                                <small>
                                    Name
                                </small>
                                <h5>
                                    {item.name}
                                </h5>
                            </div>
                            <div className="col-4">
                                <small>
                                    Birthday
                                </small>
                                <h5>
                                    {item.birthdate}
                                </h5>
                            </div>
                        </div>
                    ))}

                    {/*button add data */}
                    <button className="btn btn-danger"
                    onClick={() => addStudent()}>
                        Add
                    </button>

                    {/* Modal Component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/* input untuk id, nama , birthdate */}
                                    ID
                                    <input type={`number`}
                                        className="form-control mb-2" 
                                        value={id}
                                        onChange={ev => setId(ev.target.value)}/>

                                    Name
                                    <input type={`text`}
                                        className="form-control mb-2" 
                                        value={name}
                                        onChange={ev => setName(ev.target.value)}/>

                                    BirthYear
                                    <input type={`number`}
                                        className="form-control mb-2" 
                                        value={birthdate}
                                        onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn btn-info"
                                    onClick={() => saveStudent()} >
                                        
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal*/}
                </div>
            </div>
        </div>
    )
}
export default Student