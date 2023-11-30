import React, { useState } from 'react';
import './User.css'; 

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    userID: '',
    epf: '',
    empName: '',
    costCenter: '',
    role: '', 
    status: 'active',
    createdBy: 'currentLoggedInUserId',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const validateEPF = () => {
    const { epf } = formData;
    const empName = `Employee ${epf}`; 
    const costCenter = `CC-${epf.substring(0, 3)}`; 

    setFormData({ ...formData, empName, costCenter });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'epf') {
      validateEPF();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submission logic here
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      userID: '',
      epf: '',
      empName: '',
      costCenter: '',
      role: '',
      status: 'active',
      createdBy: 'currentLoggedInUserId',
    });

    // Exit edit mode
    setIsEditMode(false);
  };

  const handleEdit = () => {
    // Enter edit mode
    setIsEditMode(true);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">

        <h3>User Form</h3>
      <label htmlFor="userID">User ID:</label>
      <input
        type="text"
        id="userID"
        name="userID"
        value={formData.userID}
        onChange={handleChange}
        disabled={isEditMode}
      />

      <label htmlFor="epf">EPF Number:</label>
      <input
        type="text"
        id="epf"
        name="epf"
        //value={formData.epf}
        onChange={handleChange}
        disabled={isEditMode}
      />

      <label htmlFor="empName">Employee Name:</label>
      <input
        type="text"
        id="empName"
        name="empName"
        value={formData.empName}
        readOnly
      />

      <label htmlFor="costCenter">Cost Center:</label>
      <input
        type="text"
        id="costCenter"
        name="costCenter"
        value={formData.costCenter}
        readOnly
      />

      <label htmlFor="role">Role:</label>
      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        disabled={isEditMode}
      >
        <option> Role 1 </option>
        <option> Role 2 </option>
      </select>

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        disabled={isEditMode}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
       
      </select>

      <input type="hidden" id="createdBy" name="createdBy" value={formData.createdBy} />

      {isEditMode ? (
        <button type="submit" className="edit-btn">
          Update
        </button>
      ) : (
        <button type="submit" className="insert-btn">
          Insert
        </button>
      )}

      <button type="button" onClick={handleEdit} disabled={isEditMode} className="edit-btn">
        Edit
      </button>
    </form>
  );
};

export default EmployeeForm;
