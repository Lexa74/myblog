import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import './customSelect.scss'

export const CustomSelect = ({label, optionsVal, labelOptions, customClass}) => {
    const [status, setStatus] = useState('')

    const handleChange = (val) => {
        setStatus(val)
    }

    return (
        <>
            <FormControl fullWidth className={customClass}>
                <InputLabel className={'custom-select-label'} id="select-label">{label}</InputLabel>
                <Select
                    labelId="select-label"
                    id="custom-select"
                    value={status}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {optionsVal.map((optionVal, index) => (
                        <MenuItem key={index} value={optionVal}>{labelOptions[index]}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}