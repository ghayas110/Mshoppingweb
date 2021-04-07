import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    return (
        <a
            href="https://wa.me/+447949549043"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
            <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
        </a>
    );
}

export default Whatsapp