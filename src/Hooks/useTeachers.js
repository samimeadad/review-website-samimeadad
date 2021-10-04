import { useEffect, useState } from "react";

const useTeachers = () => {
    const [ teachers, setTeachers ] = useState( [] );

    useEffect( () => {
        fetch( './teachers.json' )
            .then( res => res.json() )
            .then( data => setTeachers( data ) );
    }, [] );

    //return teachers state variable and setTeachers function
    return [ teachers, setTeachers ];
}

//export the entire function for external use
export default useTeachers;