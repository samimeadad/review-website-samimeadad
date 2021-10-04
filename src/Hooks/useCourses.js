import { useEffect, useState } from "react";

const useCourses = () => {
    const [ courses, setCourses ] = useState( [] );

    useEffect( () => {
        fetch( './courses.json' )
            .then( res => res.json() )
            .then( data => setCourses( data ) );
    }, [] );
    console.log( courses );

    //return courses state variable and setCourses function
    return [ courses, setCourses ];
}

//export the entire function for external use
export default useCourses;