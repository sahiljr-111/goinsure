import React from 'react';
import CommonSelect from '../../Components/Common/UI/CustomSelect';
import Time from '../../Components/Common/UI/TimePicker/Time';

function ReportMonth() {

    const policies = [
        { label: "Test 1", value: "Test 1" },
        { label: "Test 2", value: "Test 2" },
        { label: "Test 3", value: "Test 3" },
    ];
    return (
        <>
            <div className="report-month-main">
                <h5 className='report-month-title px-3 pt-4'>Report by Month</h5>
                <div className="card mx-3 report-month-card">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 input-main-box">
                            <div className="top-input">
                                <CommonSelect
                                    inputWrapperClassName="rounded-3 w-100 outline-0"
                                    wrapperClassName="rounded-3 w-100 outline-0"
                                    options={policies}
                                    className="w-100 rounded-3 outline-0"
                                    searchable={false}
                                    placeholder="Report type"
                                />
                            </div>
                            <div className="top-input">
                                <CommonSelect
                                    inputWrapperClassName="rounded-3 w-100 outline-0"
                                    wrapperClassName="rounded-3 w-100 outline-0"
                                    options={policies}
                                    className="w-100 rounded-3 outline-0"
                                    searchable={false}
                                    placeholder="Type of Date"
                                />
                            </div>
                            <div className="time-lable top-input">
                                <Time />
                            </div>
                            <div className="time-lable top-input">
                                <Time />
                            </div>
                            <div className="top-input">
                                <CommonSelect
                                    inputWrapperClassName="rounded-3 w-100 outline-0"
                                    wrapperClassName="rounded-3 w-100 outline-0"
                                    options={policies}
                                    className="w-100 rounded-3 outline-0"
                                    searchable={false}
                                    placeholder="Carrier"
                                />
                            </div>
                            <div className="top-input">
                                <CommonSelect
                                    inputWrapperClassName="rounded-3 w-100 outline-0"
                                    wrapperClassName="rounded-3 w-100 outline-0"
                                    options={policies}
                                    className="w-100 rounded-3 outline-0"
                                    searchable={false}
                                    placeholder="Product"
                                />
                            </div>
                            <div className="top-input">
                                <CommonSelect
                                    inputWrapperClassName="rounded-3 w-100 outline-0"
                                    wrapperClassName="rounded-3 w-100 outline-0"
                                    options={policies}
                                    className="w-100 rounded-3 outline-0"
                                    searchable={false}
                                    placeholder="Product Type"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-3 my-3 pb-4 report-month-table'>
                    <div className="gsw-globel-table rounded-3 p-0">
                        <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main text-center table-bordered month-table">
                                <thead>
                                    <tr>
                                        <th scope="col" rowspan="2">Month</th>
                                        <th scope="col" rowspan="2">Applications</th>
                                        <th scope="col" rowspan="2">Submitted Ap</th>
                                        <th scope="col" rowspan="2">Placed Policies</th>
                                        <th scope="col" rowspan="2">Placed AP</th>
                                        <th scope="col" rowspan="2">Placement %</th>
                                        <th scope="col" rowspan="2">Avg AP</th>
                                        <th>Retention</th>
                                        <th>Placed Policy Type</th>
                                    </tr>
                                    <tr>
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        {/* <th></th> */}
                                        <th className='p-0'>
                                            <table className="table-box-main sub-table table-bordered border-0">
                                                <tr>
                                                    <td className='border-end'>Active</td>
                                                    <td className='border-end'>Retention%</td>
                                                    <td className=''>FPW</td>
                                                </tr>
                                            </table>
                                        </th>
                                        <th className='p-0'>
                                            <table className="table-box-main sub-table table-bordered border-0">

                                                <tr>
                                                    <td className='border-end'>Level</td>
                                                    <td className='border-end'>%</td>
                                                    <td className='border-end'>Graded</td>
                                                    <td className='border-end'>%</td>
                                                    <td className='border-end'>Rop</td>
                                                    <td className='border-end'>%</td>
                                                    <td className='border-end'>Guaranteed</td>
                                                    <td className='border-end'>%</td>
                                                </tr>
                                            </table>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='month-table-tbody'>
                                    <tr>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active">-</td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table">
                                                <tr>
                                                    <td>Active</td>
                                                    <td>Retention%</td>
                                                    <td>FPW</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table">
                                                <tr>
                                                    <td>Level</td>
                                                    <td>%</td>
                                                    <td>Graded</td>
                                                    <td>%</td>
                                                    <td>Rop</td>
                                                    <td>%</td>
                                                    <td>Guaranteed</td>
                                                    <td>%</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* <td className="active">
                                            <input
                                                className="form-check-input checkbox-table"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                        </td> */}
                                        <td className="active">January</td>
                                        <td className="active">1</td>
                                        <td className="active">$69.00</td>
                                        <td className="active">0</td>
                                        <td className="active">$0.00</td>
                                        <td className="active">0.00%</td>
                                        <td className="active">$0.00</td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table month-table">
                                                <tr>
                                                    <td>$0.00</td>
                                                    <td>0.00%</td>
                                                    <td>0.00%</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table month-table ">
                                                <tr>
                                                    <td>$0.00</td>
                                                    <td>0.00%</td>
                                                    <td>$0.00</td>
                                                    <td>00</td>
                                                    <td>000</td>
                                                    <td>000</td>
                                                    <td>000</td>
                                                    <td>00</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="active">Totals</td>
                                        <td className="active">5</td>
                                        <td className="active">$69.00</td>
                                        <td className="active">0</td>
                                        <td className="active">$0.00</td>
                                        <td className="active">0.00%</td>
                                        <td className="active">$0.00</td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table month-table">
                                                <tr>
                                                    <td>$0.00</td>
                                                    <td>0.00%</td>
                                                    <td>0.00%</td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td className="active p-0">
                                            <table className="table-box-main sub-table">
                                                <tr>
                                                    <td>$0.00</td>
                                                    <td>0.00%</td>
                                                    <td>$0.00</td>
                                                    <td>00</td>
                                                    <td>000</td>
                                                    <td>000</td>
                                                    <td>000</td>
                                                    <td>00</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReportMonth;
