import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ProductCard from "../../Components/Pages/Carrer/ProductCard";
import "./Carrer.css";
import AddCarrerModal from "../../Components/Pages/Carrer/AddCarrerModal";
import AddProductModal from "../../Components/Pages/Carrer/AddProductModal";
import { Input } from "rsuite";
import { CiSearch } from "react-icons/ci";

const Carrer = () => {
  const [carrerModal, setCarrerModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="gsw-globel-tab flex-grow-1 h-100">
              <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                <div className="card-header bg-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="carrerSearchBar">
                      <Input
                        type="text"
                        placeholder="Search carrier/products"
                        className="searchInput"
                      />
                      <button className="searchButton">
                        <CiSearch size={20} />
                      </button>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <button
                        onClick={() => setCarrerModal(true)}
                        className="button-outline d-flex align-items-center justify-content-center gap-2 flter-btn bg-transparent"
                      >
                        <IoMdAdd size="25" color="#000" />
                        Add Carrer
                      </button>
                      <button
                        onClick={() => setProductModal(true)}
                        className="button-fill d-flex align-items-center justify-content-center gap-2 flter-btn"
                      >
                        <IoMdAdd size="25" color="#FFF" />
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="carrerCardGroup">
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddCarrerModal open={carrerModal} setOpen={setCarrerModal} />
      <AddProductModal open={productModal} setOpen={setProductModal} />
    </>
  );
};

export default Carrer;
