import { Container } from 'react-bootstrap';
import { APP_ERROR_IMG } from '../../config';
import './style.css';

const DesterError = ({ message, errorCode }) => {
    let errorCodeArray = [...errorCode];
    return (
        <Container className="error-main-container">
         <section className="error-container">
            <span className="screen-reader-text">{errorCodeArray[0]}</span>
            <span className="outer-circle">
                <img src={APP_ERROR_IMG} alt="" />
            </span>
            <span className="screen-reader-text">{errorCodeArray[2]}</span>
            <div className="link-container">
                <div>
                    <span className="error-message">{message}</span>
                </div>
                <a href="/" className="more-link">Visit Home Page</a>
            </div>
        </section>
        </Container>
    )
}

export default DesterError
