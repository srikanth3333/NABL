import React from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

function AddData() {

    let history = useNavigate()
    const [companyName, setCompanyName] = React.useState('')
    const [serialId, setSerialId] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [pdf, setPdf] = React.useState(null)
    const [ulr, setUlr] = React.useState(null)
    const [log, setLog] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const postData = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append("pdf", pdf);
        formData.append("companyName", companyName);
        formData.append("serialId", serialId);
        formData.append("ulrNo", ulr);
        formData.append("startDate", startDate);
        formData.append("log", log);
        await axios.post(`http://192.168.0.243:7000/api/addMeterData`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            setLoading(false)
            history("/")
        })
        .catch(err => alert("Something went wrong please try again later"))
    }

    const handleFileSelect = (event) => {
        setPdf(event.target.files[0])
    }

  return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <form enctype="multipart/form-data"  onSubmit={postData}>
                        <div className="form-group">
                            <label htmlFor="">Company Name</label>
                            <input onChange={(e) => setCompanyName(e.target.value)} type="text" placeholder="Company name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Meter No</label>
                            <input type="text" onChange={(e) => setSerialId(e.target.value)} placeholder="Meter no" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">ULR No</label>
                            <input type="text" onChange={(e) => setUlr(e.target.value)} placeholder="Ulr no" className="form-control" />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="">Date of testing</label>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="">Upload PDF</label>
                            <input type="file" onChange={handleFileSelect} className="form-control py-1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Any Remarks</label>
                            <textarea name="" onChange={(e) => setLog(e.target.value)}placeholder="Any remarks"className="form-control" id="" cols="10" rows="3"></textarea>
                        </div>
                        <div className="d-flex justify-content-around">
                            <Link to="/"  className="btn btn-outline-danger py-1 px-4">Cancel</Link >
                            <button className="btn btn-primary py-1 px-4" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
  );
}

export default AddData;
