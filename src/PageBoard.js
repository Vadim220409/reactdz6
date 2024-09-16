import React from "react";
import PropTypes from 'prop-types'
import Event from './Event'
import styled from 'styled-components';


const PageBoardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    margin: auto;
`;

const EventWrapper = styled.div`
    flex: 1 1 calc(25% - 16px);
    margin: 8px; 
    margin: auto;
`;

const PageBoard = ({ events }) => {
    return (
        <PageBoardContainer>
            {events.map((event, index) => (
                <EventWrapper key={index}>
                    <Event 
                        name={event.name} 
                        location={event.location} 
                        speaker={event.speaker} 
                        start={event.time.start} 
                        end={event.time.end} 
                    />
                </EventWrapper>
            ))}
        </PageBoardContainer>
    )
}

PageBoard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PageBoard;