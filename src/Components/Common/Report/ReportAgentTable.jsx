import React from 'react';
import Index from '../UI/CustomPagination/Index';

function ReportAgentTable() {
    return (
        <>
            <div className="gsw-globel-table">
                <div className="table-responsive mb-3 scrollbar">
                    <table className="table-box-main text-center">
                        <thead>
                            <tr>
                                <th className="w-100px">
                                    <input
                                        className="form-check-input checkbox-table"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                    />
                                </th>
                                <th>MOnth</th>
                                <th>Applications</th>
                                <th>Submitted Ap</th>
                                <th>Placed Policies</th>
                                <th>Placed AP</th>
                                <th>Placement %</th>
                                <th>Avg AP</th>
                                <th>Retention</th>
                                <th>Placed Policy Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="active">
                                    <input
                                        className="form-check-input checkbox-table"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                    />
                                </td>
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
                                <td className="active">
                                    <input
                                        className="form-check-input checkbox-table"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                    />
                                </td>
                                <td className="active">January</td>
                                <td className="active">1</td>
                                <td className="active">$69.00</td>
                                <td className="active">0</td>
                                <td className="active">$0.00</td>
                                <td className="active">0.00%</td>
                                <td className="active">$0.00</td>
                                <td className="active p-0">
                                    <table className="table-box-main sub-table">
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
                <Index />
            </div>
        </>
    );
}

export default ReportAgentTable;
