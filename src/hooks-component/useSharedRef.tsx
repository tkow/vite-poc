import React, {createContext, ComponentType, useRef, useMemo, useContext} from 'react'


const SharedRefContext = createContext<Record<symbol,React.MutableRefObject<any>>>({})

export const createSharedRef = <T extends string>(sharedKey: T) => {
    const refId = useMemo(() => Symbol(sharedKey),[])
    const refs = useContext(SharedRefContext)
    const ref = useRef()
    return ref
}

export const useSharedRef = () => {
    const ref = useRef()
    return ref
}
