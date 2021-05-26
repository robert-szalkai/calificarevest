import React, { useState } from 'react';

export const AppContext = React.createContext({
    selectedCourse: "",
    setSelectedCourse: () => {}
})

const AppContextProvider = (props) => {

    const [selectedCourse, setSelectedCourse] = useState("");

    const setSelectedCourseHandler = (value) => {
        setSelectedCourse(value);
    }

    return(
        <AppContext.Provider value={{
            selectedCourse: selectedCourse,
            setSelectedCourse: setSelectedCourseHandler
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;