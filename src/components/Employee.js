function Employee(props) {
    return(
        <div className="row">
            {/*Bagian Gambar */}
            <div className="col-3">
            {/*Load Image */}
            <img className="img img-rounded" src={props.image} alt="Gambar"
            style={{width: `20rem`}}
            />
            </div>
            
            {/*Bagian kedua */}
            <div className="col-4">
                <small className="text-info">
                    Nama
                </small>
                <h5>
                    {props.name}
                </h5>

                <small className="text-info">
                    Tgl.Lahir
                </small>
                <h5>
                    {props.tanggal}
                </h5>

                <small className="text-info">
                    Gender
                </small>
                <h5>
                    {props.gender}
                </h5>
            </div>

            {/*Bagian ketiga */}
            <div className="col-4">
            <small className="text-info">
                    Email
                </small>
                <h5>
                    {props.email}
                </h5>

                <small className="text-info">
                    Telephone
                </small>
                <h5>
                    {props.telephone}
                </h5>

                <small className="text-info">
                    Division
                </small>
                <h5>
                    {props.division}
                </h5>
            </div>
        </div>
    )
}
export default Employee