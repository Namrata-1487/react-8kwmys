import React from 'react';

export default function Submitionform() {
  return (
    <>
      <h1> React form</h1>
      <form className="form-details" method = "post">
        <div className="personal-details">
          <div className="input">
            <label>
              First Name<span>*</span>
            </label>
            <br />
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="input">
            <label>
              Last Name<span>*</span>
            </label>
            <br />
            <input type="text" placeholder="Enter last name" />
          </div>
          <div className="input">
            <label>
              Enter email<span>*</span>
            </label>
            <br />
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="input">
            <label>
              Contact<span>*</span>
            </label>
            <br />
            <input type="tel" placeholder="Enter mobile number " />
          </div>
        </div>
        {/* gender */}
        <div className="gender">
          <label>Gender</label>&nbsp;&nbsp;
          <br />
          <input type="radio" />
          Female
          <input type="radio" />
          Male
          <input type="radio" />
          Other
          <br />
        </div>
        {/* subject list */}
        <div className="subjects">
          <label>Your best subject </label>
          <br />
          <input type="checkbox" name="subject" /> English
          <input type="checkbox" name="subject" /> Maths
          <input type="checkbox" name="subject" /> Physics
          <br />
        </div>
        {/* upload resume  */}
        <div className="file">
          <label>
            Upload resume <span>*</span>
          </label>
          <br />
          <input type="file" />
        </div>
      </form>
    </>
  );
}
