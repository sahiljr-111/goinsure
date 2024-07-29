import React from 'react';
import CommonSelect from '../../../../Components/Common/UI/CustomSelect';
import CommonTextarea from '../../../../Components/Common/UI/Textarea/FloatingLabelTextarea';
import CustomButton from '../../../../Components/Common/UI/CustomButton';
import { Button } from 'rsuite';
import ReplayBtn from '../../../../Components/Common/UI/CustomButton/ReplayBtn';

function SMS() {

  const policies = [
    { label: "Template 1", value: "template1" },
    { label: "Template 2", value: "template2" },
    { label: "Template 3", value: "template3" },
  ];

  const Policy = [
    { label: "Policy 1", value: "policy1" },
    { label: "Policy 2", value: "policy2" }
  ];

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="card h-100 border-0 bg-transparent">
            <CommonSelect
              inputWrapperClassName="border-0 outline-0"
              wrapperClassName="py-3 border-0 outline-0"
              options={policies}
              label="Template"
              className="w-100 border-0 outline-0"
              searchable={false}
            />

            <CommonSelect
              inputWrapperClassName="border-0 outline-0"
              wrapperClassName="py-3 border-0 outline-0"
              options={Policy}
              label="Policy"
              className="w-100 border-0 outline-0"
              searchable={false}
            />

            <CommonTextarea />

            <Button
              onClick={() => setOpenDialPad(true)}
              className="btn w-100 mt-3"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="col-8 message-conversation-section">
          <h4 className="mb-3">Message Conversation</h4>
          <div className="card">
            <div className="card-body">
              <div className="ms-body">
                <div className="message-feed media d-flex ">
                  <div className="pull-left">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user" alt="" className="img-avatar" />
                  </div>
                  <div className="media-body position-relative align-items-end d-flex flex-wrap">
                    <div className="mf-content position-relative">
                      Hey , I need assistance on my insurance
                      <br />
                      please help me out !! Thanks
                      <span>John Doe</span>
                    </div>
                    <ReplayBtn btntext="Replay" />
                    <small className="mf-date">at 2023-11-08 18:54:27</small>
                  </div>
                </div>
                <div className="or-list position-relative">
                  <span>Today</span>
                </div>
                <div className="message-feed right flex-row-reverse d-flex ">
                  <div className="pull-right">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user" alt="" className="img-avatar" />
                  </div>
                  <div className="media-body position-relative align-items-end d-flex flex-wrap justify-content-end">
                    <div className="mf-content position-relative">
                      Sale John
                      <br />
                      john@quickwayinfosystems.in <br />
                      Austin Henriod <br />
                      GR00GWF0152623 <br />
                      +918603662315 <br />
                      Wellabe Guaranteed Assurance Guaranteed Issue 51.
                      <br />
                      58 09-26-0023 08-28-2023 GoInsureWise <br />
                      11-26-0023 8000 approved Active Past Due
                      <span>Agent | Austin Henriod</span>
                    </div>
                    <ReplayBtn btntext="Replay" />
                    <small className="mf-date"> at 2023-11-08 18:54:27</small>
                  </div>
                </div>
                <div className="message-feed media d-flex ">
                  <div className="pull-left">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user" alt="" className="img-avatar" />
                  </div>
                  <div className="media-body position-relative align-items-end d-flex flex-wrap">
                    <div className="mf-content position-relative">
                      Hey , I need assistance on my insurance
                      <br />
                      please help me out !! Thanks
                      <span>John Doe</span>
                    </div>
                    <ReplayBtn btntext="Replay" />
                    <small className="mf-date">at 2023-11-08 18:54:27</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SMS;
