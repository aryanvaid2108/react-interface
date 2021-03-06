import React from 'react'
import '../css/App.css'
import { FaPlus } from 'react-icons/fa'
import useSignUpForm from '../customHooks/useSignupForm';

export default function AddAppointments({ formDisplay,toggleForm,addApt }) {
    const callback = () => {
        alert(`User Created!
               Name: ${inputs.petName} ${inputs.ownerName}
               Appointment Notes: ${inputs.aptNotes}`);
        addApt(inputs)
        toggleForm()
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(callback);
    return(
        <div className={
            'card textcenter mt-3 ' +
            (formDisplay ? '': 'add-appointment')
        }>
        <div className="apt-addheading card-header bg-primary text-white"
        onClick={toggleForm}>
          <FaPlus /> Add Appointment
        </div>
        <div className="card-body">
          <form id="aptForm" noValidate>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Pet's Name"
                  onChange={e=>handleInputChange(e)}
                  value = {inputs.petName}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner's Name"
                  value = {inputs.ownerName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value = {inputs.aptDate}
                  onChange={handleInputChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value = {inputs.aptTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  value = {inputs.aptNotes}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                  onClick={(e) => handleSubmit(e)}
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}