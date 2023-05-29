import {CustomSelect} from "../UI/CustomSelect";
import {Loader} from "../icons/Loader";


export const TableRow = ({data, titleMobile, rowChildren}) => {
    return (
        <>
            {data.length !== 0 ? (
                <>{rowChildren}
                </>
            ) : <Loader/>}
        </>
    )
}