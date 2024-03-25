function Lists(props) {

    let CompanyList = props.companies

    /*
    Sorting by revenue
    */
    CompanyList = CompanyList.sort((a, b) => {
        let revenue1 = a.revenueInBil ? a.revenueInBil : a.revenueInLCrs
        let revenue2 = b.revenueInBil ? b.revenueInBil : b.revenueInLCrs
        return revenue2 - revenue1
    })


    const rowHead =
        <tr>
            {Object.keys(CompanyList[0]).map(heading => <th>{heading}</th>)}
        </tr>

    const rowData = CompanyList.map(company =>
        <tr>
            <td>{company.name}</td>
            {company.marketCapInBil ? <td>{company.marketCapInBil}</td> : <td>{company.marketCapInLCrs}</td>}
            {company.revenueInBil ? <td>{company.revenueInBil}</td> : <td>{company.revenueInLCrs}</td>}
        </tr>)


    return (
        <>
            <h3>{props.category}</h3>
            <table className="table">
                <thead>{rowHead}</thead>
                <tbody>{rowData}</tbody>
            </table>
        </>
    )
}

export default Lists