import { useEffect, useRef, useState } from "react"

export function useForm() {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus()
            }, 1000)
        }
        
        return () => {
            setValue('')
        }
    }, [])

    const onChange = (e) => {
        const regexPhoneNumber = /^[0-9\b]+$/
        if (e.target.value === '' || regexPhoneNumber.test(e.target.value)) {
            setValue(e.target.value)
        }
    }
    const openChat = () => {
        if (value === '') return alert('Debes ingresar un número')
        if (value.length !== 9) return alert('El número debe tener dígitos')
        window.open(`https://api.whatsapp.com/send/?phone=51${value}&text&type=phone_number&app_absent=0`, '_blank')
    }
    return {
        value,
        onChange,
        openChat,
        inputRef
    }
}