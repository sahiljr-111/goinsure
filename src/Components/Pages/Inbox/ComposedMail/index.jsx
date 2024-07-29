// components/ComposedMail.js
import { useState } from "react";
import { Content, Form } from "rsuite";
import CustomDrawer from "../../../Common/UI/CustomDrawer/index.jsx";
import CommonInput from "../../../Common/UI/CustomInput/index.jsx";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import CommonSelect from "../../../Common/UI/CustomSelect/index.jsx";
import { Link21 } from "iconsax-react";

const templates = [
  { label: "Template 1", value: "template1" },
  { label: "Template 2", value: "template2" },
];

const policies = [
  { label: "Policy 1", value: "policy1" },
  { label: "Policy 2", value: "policy2" },
];

const ComposedMail = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    template: "template1",
    policy: "policy1",
  });
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);
  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <CustomDrawer
      open={open}
      onClose={onClose}
      isHeaderTitle="New Mail"
      isHeaderSeparator
      isFooterButtons
      clickButtonText1="Send"
      clickButtonText2="Save as draft"
    >
      <Content>
        <Form fluid>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <CommonInput
              wrapperClassName="d-flex align-items-center gap-2 py-3 w-100"
              // labelClass="w-25"
              label="To"
              placeholder="John"
              value={formData.to}
              onChange={(value) => handleChange(value, "to")}
            >
              <div className="d-flex align-items-center gap-2 bg-transparent border-0 p-0">
                <CustomButton
                  className=" bg-transparent border-0 p-0"
                  style={{
                    color: "#1D2939",
                  }}
                  appearance="link"
                  onClick={() => setCcOpen(!ccOpen)}
                >
                  CC
                </CustomButton>
                <CustomButton
                  className=" bg-transparent border-0 p-0"
                  style={{
                    color: "#1D2939",
                  }}
                  appearance="link"
                  onClick={() => setBccOpen(!bccOpen)}
                >
                  Bcc
                </CustomButton>
              </div>
            </CommonInput>
          </div>

          {ccOpen && (
            <CommonInput
              wrapperClassName="d-flex align-items-center gap-2 py-3"
              label="Cc"
              value={formData.cc}
              onChange={(value) => handleChange(value, "cc")}
            />
          )}
          {bccOpen && (
            <CommonInput
              wrapperClassName="d-flex align-items-center gap-2 py-3"
              label="Bcc"
              value={formData.bcc}
              onChange={(value) => handleChange(value, "bcc")}
            />
          )}
          <CommonInput
            wrapperClassName="d-flex align-items-center gap-2 py-3"
            label="Subject"
            placeholder="Lorem ipsum"
            value={formData.subject}
            onChange={(value) => handleChange(value, "subject")}
          />
          <CommonSelect
            inputWrapperClassName="border-0 outline-0"
            wrapperClassName="d-flex align-items-center gap-2 py-3 border-0 outline-0"
            options={templates}
            label="Template"
            className="w-100  border-0 outline-0"
            value={formData.template}
            searchable={false}
            onChange={(value) => handleChange(value, "template")}
          >
            <CustomButton
              className=" bg-transparent"
              style={{
                backgroundColor: "transparent",
                padding: "7px 11px 7px 7px",
              }}
            >
              <Link21 color="rgb(29, 41, 57)" size={20} />
            </CustomButton>
          </CommonSelect>
          <CommonSelect
            inputWrapperClassName="border-0 outline-0"
            wrapperClassName="d-flex align-items-center gap-2 py-3 border-0 outline-0"
            options={policies}
            label="Policy"
            className="w-100  border-0 outline-0"
            value={formData.policy}
            searchable={false}
            onChange={(value) => handleChange(value, "policy")}
          />

          <div
            className="rounded-3 overflow-hidden mb-3"
            style={{
              border: "1px solid #ddd",
            }}
          >
            <div
              style={{
                backgroundColor: "#42707F33",
              }}
              className="d-flex justify-content-center align-items-center p-2 w-100"
            >
              <img
                src="logo.png"
                alt="logo"
                style={{
                  maxWidth: "100px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <div className="p-3">
              <h5>Hello, John Doe</h5>
              <p
                className="text-left"
                style={{ color: "#98A2B3", fontSize: "13px" }}
              >
                Congratulations on acquiring your final Expense Life insurance
                policy with Wellabe! Below you will find the details of your
                policy.
              </p>
              <h5>Policy Details</h5>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}>Carrier :-</div>
                Wellabe
              </div>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}>Type of Coverage :-</div>{" "}
                Guaranteed Assurance
              </div>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}>Face Value :-</div>$
              </div>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}>Premium Amount :-</div>{" "}
                {"${{Policy-premium}}"}
              </div>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}> Effective Date :-</div>{" "}
                01-03-2024
              </div>
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ fontSize: "13px" }}
              >
                <div style={{ color: "#98A2B3" }}>
                  Your Agent’s Information :-
                </div>{" "}
                ---
              </div>
              <p
                className="text-left pt-3"
                style={{ color: "#98A2B3", fontSize: "13px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>
        </Form>
      </Content>
    </CustomDrawer>
  );
};

export default ComposedMail;
