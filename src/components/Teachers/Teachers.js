import React from 'react';
import useTeachers from '../../Hooks/useTeachers';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [ teachers ] = useTeachers();
    return (
        <div className="m-5">
            <hr className="text-secondary" />
            <h1 className="text-center text-info bg-dark p-3 rounded-3">Our <span className="text-warning fw-bold">Honorable</span> Instructors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 m-5">
                {
                    teachers.map( teacher => <Teacher
                        key={ teacher.id }
                        teacher={ teacher }>
                    </Teacher> )
                }
            </div>
        </div>
    );
};

export default Teachers;