import React from 'react';
import QRCode from "react-qr-code";



function QrCode({code}) {

  return (
    <section className={"qr"}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body p-3 text-center">
                            <div className="my-3">
                                <QRCode value={code} />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary px-4 py-1">Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QrCode