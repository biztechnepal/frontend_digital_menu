import { createContext, useState } from "react";

// const initialState = {
//     isGridView:false
// };

export const ViewContext = createContext();

export function ViewContextProvider({ children }) {
    const [isGridView, setIsGridView] = useState(false)

    const onChangeView = (bool) => {
        setIsGridView(bool)
    };

    return (
        <ViewContext.Provider
            value={{
                isGridView,
                onChangeView,
                setIsGridView
            }}
        >
            {children}
        </ViewContext.Provider>
    );
}

