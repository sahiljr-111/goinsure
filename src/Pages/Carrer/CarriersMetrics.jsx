import React from "react";
import { BsBox } from "react-icons/bs";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import CarrerCharts from "../../Components/Pages/Carrer/Charts/CarrerCharts";
import CarrerBarChart from "../../Components/Pages/Carrer/Charts/CarrerBarChart";
import CarrerSaleChart from "../../Components/Pages/Carrer/Charts/CarrerSaleChart";
import CarrerProductChart from "../../Components/Pages/Carrer/Charts/CarrerProductChart";
const policies = [
  { label: "Test 1", value: "Test 1" },
  { label: "Test 2", value: "Test 2" },
  { label: "Test 3", value: "Test 3" },
];

const CarriersMetrics = () => {
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="gsw-globel-tab flex-grow-1 h-100">
              <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                <div className="card-header bg-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Carriers Metrics</h5>
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <label className="mb-0">Filter BY</label>
                      <div className="top-input filter-select">
                        <CommonSelect
                          inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center stopFocus bg-white"
                          wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                          // options={policies}
                          className="w-100 rounded-3 outline-0 d-flex align-items-center"
                          searchable={false}
                          placeholder="By year"
                          placement="bottomEnd"
                        />
                      </div>
                      <div className="top-input">
                        <CommonSelect
                          inputWrapperClassName="rounded-3 w-100 outline-0"
                          wrapperClassName="rounded-3 w-100 outline-0"
                          // options={policies}
                          className="w-100 rounded-3 outline-0"
                          searchable={false}
                          placeholder="select year"
                          placement="bottomEnd"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row p-0 m-0">
                    <div className="col-3">
                      <div className="carrerCard">
                        <div className="w-100 carrerImage">
                          <img
                            src="https://logos-world.net/wp-content/uploads/2021/03/Asana-Logo.png"
                            alt="asana"
                          />
                        </div>
                        <div className="text-center py-3">
                          <h4 className="mb-0">Asana</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="productListing overflow-auto scrollBarHidden">
                        <div className="scrollBarHidden d-flex productMainList ">
                          <div className="product">
                            <div className="productImg">
                              <BsBox size={20} color="#42707F" />
                            </div>
                            <div className="productText">
                              <h4>All Product</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur </p>
                            </div>
                          </div>
                          {Array.from({ length: 10 }).map((res, index) => (
                            <div
                              className="product originalProduct"
                              key={index}
                            >
                              <div className="productNum">
                                <span>{index + 1}</span>
                              </div>
                              <div className="productText">
                                <h4>Product {index + 1}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-2 chart-main-row g-4 mt-0">
                    <div className="col-12 col-lg-12 col-xl-6">
                      <div className="card chart-cards h-100">
                        <div className="card-header d-flex justify-content-between align-items-center mx-3">
                          <h5 className="chart-title mb-0">Active Policies</h5>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">Filter BY</p>
                            <div className="top-input filter-icons-box">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                options={policies}
                                className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                searchable={false}
                                placeholder="By Year"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                wrapperClassName="rounded-3 outline-0 chart-select-input"
                                options={policies}
                                className="rounded-3 outline-0 chart-select-input"
                                searchable={false}
                                placeholder="2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            className="chart-box"
                            style={{ width: "600px", height: "500px" }}
                          >
                            <CarrerCharts />
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center mx-3 bg-transparent">
                          <p>Revenue from 2100 policies</p>
                          <span className="text-success">$ 200000</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-6">
                      <div className="card chart-cards h-100">
                        <div className="card-header d-flex justify-content-between align-items-center mx-3">
                          <h5 className="chart-title mb-0">Placement %</h5>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">Filter BY</p>
                            <div className="top-input filter-icons-box">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                options={policies}
                                className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                searchable={false}
                                placeholder="By Year"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                wrapperClassName="rounded-3 outline-0 chart-select-input"
                                options={policies}
                                className="rounded-3 outline-0 chart-select-input"
                                searchable={false}
                                placeholder="2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-box px-3">
                            <CarrerBarChart />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-6">
                      <div className="card chart-cards h-100">
                        <div className="card-header d-flex justify-content-between align-items-center mx-3">
                          <h5 className="chart-title mb-0">Selling Pending</h5>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">Filter BY</p>
                            <div className="top-input filter-icons-box">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                options={policies}
                                className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                searchable={false}
                                placeholder="By Year"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                wrapperClassName="rounded-3 outline-0 chart-select-input"
                                options={policies}
                                className="rounded-3 outline-0 chart-select-input"
                                searchable={false}
                                placeholder="2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            className="chart-box"
                            style={{ width: "600px", height: "500px" }}
                          >
                            <CarrerSaleChart />
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center mx-3 bg-transparent">
                          <p>Estimated revenue can be generated</p>
                          <span className="text-success">$ 400000</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-6">
                      <div className="card chart-cards h-100">
                        <div className="card-header d-flex justify-content-between align-items-center mx-3">
                          <h5 className="chart-title mb-0">Product Wise</h5>
                          <div className="d-flex align-items-center gap-3">
                            <p className="mb-0">Filter BY</p>
                            <div className="top-input filter-icons-box">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                options={policies}
                                className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                searchable={false}
                                placeholder="By Year"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                wrapperClassName="rounded-3 outline-0 chart-select-input"
                                options={policies}
                                className="rounded-3 outline-0 chart-select-input"
                                searchable={false}
                                placeholder="2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            className="chart-box"
                            style={{ width: "600px", height: "500px" }}
                          >
                            <CarrerProductChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarriersMetrics;
