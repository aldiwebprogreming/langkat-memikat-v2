
import './Hero.css';
import {Card, Image} from 'react-bootstrap';

const Hero = () => {

    return (

        <div>
            <Card className='bg-success hero'>
                <Card.Body>
                    <center>
                    <Image src="logo.png" className="img-fluid logo" alt="Responsive image" />
                    <p className='label-hero text-white'>Kunjungi Wisata Langkat dengan satu genggaman smartphone</p>

                    <button className='btn btn-warning' style={{ fontWeight: 'bold' }}>REGISTER</button>
                    </center>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Hero;