import React, {createContext ,ComponentType, useRef, useMemo, useContext} from 'react'

const useHooksComponent = <Component extends ComponentType>(Component: Component) => {
    const ref = useRef<Component>()
    const RefContext = useMemo(()=> createContext<React.MutableRefObject<Component | undefined>>(ref), [])
    return (props: any) => (
        <RefContext.Provider value={ref}>
            <Component {...props} ref={ref} />
        </RefContext.Provider>
    )
}

export const TextContext = createContext('a')

export const Test = (props: unknown) => {
    const a = useContext(TextContext)
    return <div>{a}</div>
}
