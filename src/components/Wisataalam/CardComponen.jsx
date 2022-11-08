import {Card, Button} from 'react-bootstrap'
const CardComponent = () => {

    return (
        <div>
            <div className="row">
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/bukitlawang.jpg" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Bukit lawang</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/tangkahan2.png" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Tangkahan</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/airterjunsiluman.png" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Air siluman</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/plaruga.png" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Pelaruga</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/tero.png" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Tero-tero</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-6 mt-3">
                    <Card className='shadow'>
                        <Card.Img variant="top" src="alam/kolamabadi.png" />
                        <Card.Body>
                            <Card.Title className='text-success text-center'>Kolam abadi</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <center>
                            <button className='btn btn-success btn-block'>Kunjungi wisata</button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;