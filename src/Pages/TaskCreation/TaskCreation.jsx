import { Add, Filter, SearchNormal1 } from "iconsax-react";
import React, { useState } from "react";
import { Button, Form } from "rsuite";
import DateInput from "../../Components/Common/UI/DatePicker/DateInput";
import TaskCreateMoodal from "../../Components/Pages/TaskCreation/Modal/TaskCreateMoodal";
import "./TaskCreation.css"

const TaskCreation = () => {
  const [taskCreateModal, setTaskCreateModal] = useState(true);
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden rounded-4">
                      <div className="GLobalMainHeader d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                          Filter by
                          <Form>
                            <Form.Group
                              controlId=""
                              className="form-group mb-0 w-100 d-flex"
                            >
                              <Form.Control
                                className="rounded-3 search-control"
                                placeholder="Search task by name"
                                name="globalsearch"
                              />
                              <Button className="search-btn-cont">
                                <SearchNormal1
                                  color="#667085"
                                  variant="Outline"
                                  size={16}
                                />
                              </Button>
                            </Form.Group>
                          </Form>
                          <div className="time-lable top-input">
                            <DateInput placeholder="From - 24 mar,2024" />
                          </div>
                          <div className="time-lable top-input">
                            <DateInput placeholder="To - 28 mar,2024" />
                          </div>
                          <button
                            type="button"
                            className="button-fill d-flex align-items-center justify-content-center gap-2 add-bnt"
                          >
                            <Filter size="16" color="#FFF" variant="Outline" />{" "}
                            Filter
                          </button>
                        </div>
                        <div className="d-flex justify-content-end align-items-center gap-2">
                          <button className="button-fill d-flex align-items-center justify-content-center gap-2 add-bnt">
                            <Add size="25" color="#FFF" /> Add Custom Filter
                          </button>
                        </div>
                      </div>
                      <h3 className="px-2 py- fs-6">To-Do</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TaskCreateMoodal open={taskCreateModal} setOpen={setTaskCreateModal} />
      </section>
    </>
  );
};

export default TaskCreation;
