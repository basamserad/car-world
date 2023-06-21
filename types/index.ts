import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react"

export interface CustomeButtonProps{
    title: string
    containerStyles? : string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit" 
}

export interface SearchManuFacturerProps{
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}