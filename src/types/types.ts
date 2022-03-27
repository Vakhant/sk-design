export interface MainFormInputsProps {
    input: any
    meta: {
        active: boolean
        touched: boolean
        error: string | boolean
    }
    disabled?: boolean
    id: string
    label?: string
    isValidate: boolean
}