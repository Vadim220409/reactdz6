import React from "react";
import PropTypes from 'prop-types'
import { CiUser } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { GrSchedule } from "react-icons/gr";
import styled from 'styled-components';
// import { MdOutlineAccessTimeFilled } from "react-icons/md";

const EventContainer = styled.div`
    width: 370px;
    height: 250px;
    border: 1px solid #ccc;
    padding: 16px;
    margin: auto;
    margin-top: 50px;
    background-color: rgb(214, 184, 127);
    color: white;
`;

const SpanIcons = styled.span`
    margin-right: 20px
`


const Event = ({ name, location, speaker, start, end}) => {
    return (
        <EventContainer>
            <p><SpanIcons><IoLocationSharp /></SpanIcons>{location}</p>
            <h2><SpanIcons><CiUser /></SpanIcons>{speaker}</h2>
            <p><SpanIcons><GrSchedule /></SpanIcons>{new Date(start).toLocaleString()} - {new Date(end).toLocaleString()}</p>
        </EventContainer>
    )
}

Event.propTypes = {
    speaker: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

export default Event;