import React from "react";

const PolicyTrackerTable = () => {
  const policyTrackerData = [
    {
      id: 1,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: true,
      createdAt: "2024-03-27",
    },
    {
      id: 2,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: false,
      createdAt: "2024-03-27",
    },
    {
      id: 3,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: true,
      createdAt: "2024-03-27",
    },
    {
      id: 4,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: false,
      createdAt: "2024-03-27",
    },

    {
      id: 5,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: true,
      createdAt: "2024-03-27",
    },
    {
      id: 6,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: false,
      createdAt: "2024-03-27",
    },
    {
      id: 7,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: true,
      createdAt: "2024-03-27",
    },
    {
      id: 8,
      firstName: "John Doe",
      number: "(768) 234-0987",
      policyNumber: "GIW234567834",
      paymentDueDate: "2024-03-27",
      paymentStatus: false,
      createdAt: "2024-03-27",
    },
  ];
  return (
    <>
      {" "}
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-uppercase text-center">FIRST NAME</th>
            <th className="text-uppercase">NUMBER</th>
            <th className="text-uppercase">POLICY NUMBER</th>
            <th className="text-uppercase">PAYMENT DUE DATE</th>
            <th className="text-uppercase">PAYMENT STATUS</th>
            <th className="text-uppercase">CREATED AT</th>
          </tr>
        </thead>
        <tbody>
          {policyTrackerData?.length !== 0 ? (
            policyTrackerData?.map((res, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{res.id}</td>
                  <td className="text-center">{res.firstName}</td>
                  <td>
                    <a href="tel:(768) 234-0987">{res.number}</a>
                  </td>
                  <td>{res.policyNumber}</td>
                  <td>{res.paymentDueDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        res.paymentStatus === true
                          ? "text-bg-success"
                          : "text-bg-danger"
                      } fw-normal`}
                    >
                      {res.paymentStatus === true ? "Paid" : "Unpaid"}
                    </span>
                  </td>
                  <td>{res.createdAt}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={17} className="text-center bg-secondary text-light">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PolicyTrackerTable;
