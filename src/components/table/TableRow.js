import {CustomSelect} from "../UI/CustomSelect";
import {Loader} from "../icons/Loader";


export const TableRow = ({data, titleMobile}) => {
    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.map((row) => (
                        <div className={'table-row'} key={row.id}>
                            <div className="table-row__cell cell-size small">
                                <div className={'row-title-mobile'}>{titleMobile[0].title}</div>
                                <div className="table-row__cell_content">{row.id}</div>
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titleMobile[1].title}</div>
                                <div className="table-row__cell_content">{row.title}</div>
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titleMobile[2].title}</div>
                                <CustomSelect
                                    label={'Статус'}
                                    optionsVal={['done', 'pause', 'inProgress']}
                                    labelOptions={['Выполнено', 'На паузе', 'В работе']}
                                    customClass={'table-row__cell_content'}
                                />
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titleMobile[3].title}</div>
                                <div className="table-row__cell_content">{row.body}</div>
                            </div>
                        </div>
                    ))}
                </>
            ) : <Loader/>}
        </>
    )
}