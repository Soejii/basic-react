import { useState, useEffect } from "react"
/**
 * useState -> utk mendefinisikan state 
 * useEddect -> fungsi yg dijalankan (dieksekusi)
 * ketika komponennya telah ditampilkan
 * 
 */
import { Modal } from "bootstrap"

export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState(0)
    let [action, setAction] = useState("")
   let [editId, setEditId] = useState(true)

    useEffect(() => {
        // inisiasi data array students
        let arrayStudents =[
            {id: 1, name: `Soeji`, birthdate: 2004},
            {id: 2, name: `Dika`, birthdate: 1998},
        ]
        setStudents(arrayStudents)

        // inisiasi state modal student
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate(0)
        setAction("insert")
        setEditId(true)
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`){
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add newdata
            temp.push(newData)
            // store to students again
            setStudents(temp)
        } else if (action === `edit`) {
            // store data students to temp
            let temp = [...students]

            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)

            // update data on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to student compile
            setStudents(temp)
        }
    }

    // function edit student
    let editStudent = siswa => {
        // open the modal
        modalStudent.show()
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birthdate)
        setAction(`edit`)
        setEditId(false)
    }

    // function delete student
    let deleteStudent = siswa => {
        if(window.confirm('this data will get deleted,Are you sure?')){
            //store array student to temp
            let temp = [...students]

            //find index of selected data in students array
            let index = temp.findIndex(sis => sis.id === siswa.id)

            // delete data form array based on found index
            temp.splice(index, 1)

            //restore to array student
            setStudents(temp)
        }
    }

    return(
        <div className="container-fluid">
            <div className="card col-10">
                <div className="card-header bg-primary">
                    <h3 className="text-white">My Student</h3>
                </div>
                <div className="card-body">
                    {students.map(siswa => (
                        <div className="row" key={`key${siswa.id}`} >
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{siswa.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{siswa.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Date of Birth</small>
                                <h5>{siswa.birthdate}</h5>
                            </div>
                            <diV className="col-2">
                                {/**edit button */}
                                <button className="btn btn-outline-primary mx-1"
                                onClick={() => editStudent(siswa)}>
                                    Edit
                                </button>

                                {/**delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(siswa)}>
                                    Delete
                                </button>
                            </diV>
                        </div>
                    ))}

                    {/** button add data */}
                    <button className="btn btn-outline-success mt-2"
                    onClick={() => addStudent()}>
                        Tambah Siswa
                    </button>
                    {/* 
                    Create drop down using name
                    */}
                    <select>
                        {students.map(item => (
                            <option value={item}>
                            {item.name}
                            </option>
                        ))}
                    </select>
                     {/* 
                    Create radio using 
                    */}
                        {students.map(item => (
                            <div>
                                <input type ={`radio`} name={`name`} value={`item.id`}/>
                                <label>{item.name}:({item.birthdate}) </label>
                            </div>

                        ))}

                    {/** modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/** input for ID, Name, Birthdate */}
                                    ID
                                    <input type={`number`}
                                    className="form-control mb-2"
                                    value={id}
                                    onChange={ev => setId(ev.target.value)} 
                                    readOnly={!editId}/>
                                    {/** saat add student, editId = true 
                                     * oleh krn itu readonly harus false
                                    */}

                                    Name
                                    <input type={`text`}
                                    className="form-control mb-2"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}/>

                                    Birth Year
                                    <input type={`number`}
                                    className="form-control mb-2"
                                    value={birthdate}
                                    onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn-sm btn-success mt-2"
                                    onClick={() => saveStudent()}>
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}