export const TableHeader = ({titles}) => {
    return (
        <>
            <div className="table-header">
                {titles.map((titleColumns, index) => (
                    <div key={index} className={`table-header__title cell-size`}>
                        {titleColumns}
                    </div>
                ))}
            </div>
        </>
    )
}