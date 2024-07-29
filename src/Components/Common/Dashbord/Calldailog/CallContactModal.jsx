import React from 'react';
import { Modal, Button, ButtonToolbar, Placeholder, Form } from 'rsuite';
import CustomButton from '../../UI/CustomButton';
import CommonSelect from '../../UI/CustomSelect';
import DatePickerInput from '../../UI/DatePicker/DatePickerInput';
import Time from '../../UI/TimePicker/Time';
import ModalFooter from 'rsuite/esm/Modal/ModalFooter';


function CallContactModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const policies = [
        { label: "Select 1", value: "1" },
        { label: "Select 1", value: "2" },
        { label: "Select 3", value: "3" },
    ];

    const handleChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <ButtonToolbar className='d-flex justify-content-center'>
                <CustomButton
                    isFullWidth
                    className="d-flex gap-3 h-[50px] border-0 rounded-4 mb-4"
                    style={{ backgroundColor: "#F23B3B", color: "white" }}
                    onClick={handleOpen}
                >
                    <img
                        className="callcut-icons"
                        src="/Images/callcut.svg"
                        alt=""
                    />
                </CustomButton>
            </ButtonToolbar>

            <Modal className='view-modal call-contact-modal' centered open={open} onClose={handleClose} >
                <Modal.Header className='d-flex justify-content-between align-items-center p-0'>
                    <Modal.Title className='text-start title-modal'>After Call Contact Status</Modal.Title>
                    <div className='close-icons' onClick={handleClose}>
                        <img src="../../../../../public/Images/close-circle.png" alt="" />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <CommonSelect
                            inputWrapperClassName="outline-0"
                            wrapperClassName="text-start outline-0 mb-3"
                            options={policies}
                            label="Status"
                            className="w-100 border-0 outline-0"
                            searchable={false}
                            // value={formData.policy}
                            onChange={(value) => handleChange(value, "policy")}
                        />
                        <div className='mb-3'>
                            <DatePickerInput />
                        </div>
                        <div className='mb-3'>
                            <Time />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='d-flex align-items-center gap-3'>
                        <button className='button-outline'>Cancel</button>
                        <button className='button-fill'>Save</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CallContactModal;
