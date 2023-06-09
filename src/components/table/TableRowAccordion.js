import {CustomSelect} from "../UI/CustomSelect";
import {Loader} from "../icons/Loader";

export const TableRowAccordion = ({data, titlesColumnsMobile}) => {
    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.map((elemData) => (
                        <div className={'table-row'} key={elemData.id}>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titlesColumnsMobile[0]}</div>
                                <div className="table-row__cell_content">{elemData.id}</div>
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titlesColumnsMobile[1]}</div>
                                <div className="table-row__cell_content">{elemData.title}</div>
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titlesColumnsMobile[2]}</div>
                                <CustomSelect
                                    label={'Статус'}
                                    optionsVal={['done', 'pause', 'inProgress']}
                                    labelOptions={['Выполнено', 'На паузе', 'В работе']}
                                    customClass={'table-row__cell_content'}
                                />
                            </div>
                            <div className="table-row__cell cell-size">
                                <div className={'row-title-mobile'}>{titlesColumnsMobile[3]}</div>
                                <div className="table-row__cell_content">{elemData.body}</div>
                            </div>
                        </div>
                    ))}
                </>
            ) : <Loader/>}
        </>
    )
}