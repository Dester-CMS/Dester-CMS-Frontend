import React from 'react'
import { Container } from 'react-bootstrap';
import { DesterSlider } from '..';

const DesterPersons = ({ persons }) => {
    return (
        <Container>
            <DesterSlider hideMore={1} itemType="person" layout="portrait" slug="cast" itemData={persons} title="Cast"/>
        </Container>
    )
}

export default DesterPersons;
