import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MeetThePhotographer = () => {
    return (
        <>
            <Container>
                <h1>Meet the Photographer</h1>
                <Row>
                    <Col>
                        <div id='photographer-container'>
                            <img
                                src="/assets/skye.jpg" alt="photo of the photographer"
                                style={{ borderRadius: 5, }} />
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <h3>About me</h3>
                            <p>This is information about me</p>
                        </Row>
                        <Row>
                            <h3>What I offer</h3>
                            <p>This is information about what i offer</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}