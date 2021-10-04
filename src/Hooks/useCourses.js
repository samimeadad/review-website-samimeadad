import { useEffect, useState } from "react";

// custom hook for courses api call
const useCourses = () => {
    const [ courses, setCourses ] = useState( [] );

    useEffect( () => {
        fetch( './courses.json' )
            .then( res => res.json() )
            .then( data => setCourses( data ) );
    }, [] );

    //return courses state variable and setCourses function
    return [ courses, setCourses ];
}

//export the entire function for external use
export default useCourses;