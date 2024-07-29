import React, { useState } from 'react';
import CommonInput from '../../UI/CustomInput';
import { Call } from 'iconsax-react';

function CallList() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const calls = [
        {
            id: 1,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 2,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 3,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 4,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 5,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 6,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 7,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 8,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 9,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 10,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 11,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 12,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        },
        {
            id: 13,
            name: 'John Doe Calvin',
            phone: '1 (234) 567-8900',
            image: '/Images/mail-user.png'
        }
    ];

    const filteredCalls = calls.filter(call =>
        call.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            <div className="search-contacts-input">
                <CommonInput
                    placeholder="Search Contacts"
                    value={searchValue}
                    onChange={handleSearchChange}
                    wrapperClassName="search-wrapper"
                    inputWrapperClassName="search-input search-input-main search-contacts-icons d-flex align-items-center ps-2"
                />
            </div>

            <div className="call-list-main mt-4">
                {filteredCalls.map(call => (
                    <div key={call.id} className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="call-user-image">
                                <img src={call.image} alt={call.name} />
                            </div>
                            <div>
                                <h5>{call.name}</h5>
                                <p>{call.phone}</p>
                            </div>
                        </div>
                        <div className="call-circle-icon">
                            <Call size="20" color="#595959" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CallList;
