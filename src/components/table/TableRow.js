import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const TableRow = ({data}) => {
    return (
        <>
            {data.map((row) => (
                <div className={'table-row'} key={row.id}>
                    <div className="cell-size small">{row.id}</div>
                    <div className="cell-size">{row.title}</div>
                    <div className="cell-size">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"> </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={'done'}>Выполнено</MenuItem>
                                <MenuItem value={'pause'}>На паузе</MenuItem>
                                <MenuItem value={'inProgress'}>В работе</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="cell-size">{row.body}</div>
                </div>
            ))}

        </>

    )
}