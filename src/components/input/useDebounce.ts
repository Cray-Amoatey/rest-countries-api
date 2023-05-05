import {useRef} from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export default function useDebounce(search: Function, delay: number){
    const timeout: {current: NodeJS.Timeout | null} = useRef(null)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function debounced(...params:any) {
        timeout.current && clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            search(...params)

        },delay)
    }

    return debounced
}