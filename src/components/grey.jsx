import React from 'react';

import "./grey.css"

function Grey({children}) {
    return (
        <section className="grey">
            {children}
        </section>
    );
}

export default Grey;