import React, { } from 'react';
import "./NominationDone.css"

function NominationDone(props) {
    return (
        <div id="nomination-done">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h3>You have nominated your 5 favourite movie!</h3>
            <h6>To add a new nomination you must remove one of them.</h6>
        </div>
    )
}

export default NominationDone