import React from 'react';      
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import QRCode from "react-qr-code";

function Home() {

    const [companyName, setCompanyName] = React.useState('')
    const [serialId, setSerialId] = React.useState('')
    const [ulrNo, setUlrNo] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [data, setData] = React.useState([])

    const getData = async () => {
        await axios.get(`http://localhost:7000/api/getMeterData?companyName=${companyName}&serialId=${serialId}&startDate=${startDate}&ulrNo=${ulrNo}`)
        .then(res => {
            setData(res.data.meterData)
            setLoading(false)
        })
    }


    React.useEffect(() => {
        getData()
    }, [companyName,serialId,startDate,ulrNo])

    
    
  return (
      <>
            <section className="progress-bars">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body p-3 bg-white">
                                    <h2 className="my-3">Readings Data</h2>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div class="input-group mb-3">
                                                <input onChange={(e) => {
                                                    setLoading(true)
                                                    setCompanyName(e.target.value)
                                                }} type="text" class="form-control" placeholder="Company Name" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="input-group mb-3">
                                                <input onChange={(e) => setSerialId(e.target.value)}  type="number" class="form-control" placeholder="Meter No" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="input-group mb-3">
                                                <input onChange={(e) => setUlrNo(e.target.value)}  type="number" class="form-control" placeholder="Ulr No" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="input-group mb-3">
                                                <input type="date" onChange={(e) => setStartDate(e.target.value)} class="form-control" placeholder="From Date" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        loading
                                        ?
                                            <div className="text-center mt-4">   
                                                <div class="spinner-border text-primary" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <p>Fetching Data...</p>
                                            </div>
                                        :
                                        <table class="table table-responsive table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Company Name</th>
                                                    <th scope="col">Meter No</th>
                                                    <th scope="col">Ulr No</th>
                                                    <th scope="col">Date of testing</th>
                                                    <th scope="col">View PDF</th>
                                                    <th scope="col">QR Code</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {
                                                        data.length > 0
                                                        ?
                                                        data.map((item,i) => (
                                                            <tr key={i}>
                                                                <td>{item.companyName}</td>
                                                                <td>{item.serialId}</td>
                                                                <td>{item.ulrNo}</td>
                                                                <td>{`${new Date(item.startDate).getDate()}/0${new Date(item.startDate).getMonth() + 1}/${new Date(item.startDate).getFullYear()}`}</td>
                                                                <td>
                                                                    <a href={`http://localhost:7000/${item.pdf}`} target="_blank" className="text-white btn py-1 px-3 btn-sm btn-primary">View</a>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <QRCode value={item.ulrNo} />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <>
                                                            <tr>
                                                                <td colspan="5">No records founds</td>
                                                            </tr>
                                                            
                                                        </>
                                                    }
                                                </tbody>
                                        </table>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
  );
}

export default Home;
