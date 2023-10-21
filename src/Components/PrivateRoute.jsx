import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { globalContext } from '../ContextHooks/Provider';
import { Oval } from 'react-loader-spinner'

function PrivateRoute({ children }) {
    const { user, loading } = useContext(globalContext);

    const location = useLocation();




    if (loading) {
        return <div className='flex items-center justify-center w-full h-[60vh]'>
            <Oval
                height={80}
                width={80}
                color="black"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#adadad"
                strokeWidth={5}
                strokeWidthSecondary={4}

            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to='/Login'></Navigate>
}

export default PrivateRoute