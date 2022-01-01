import { Alert, Container } from 'react-bootstrap';
import { APP_GREETING_IMG } from '../../config';
import "./style.css"

const SugoiStarter = () => {
    return (
        <div className="sugoi-greeting m-3 align-items-center">
            <Container>
                <img className="sugoi-greeting-img" src={APP_GREETING_IMG} alt="" />
            </Container>
            <Alert variant="primary">
                Start Adding Content On The Backend!
            </Alert>
        </div>
    )
}

export default SugoiStarter
