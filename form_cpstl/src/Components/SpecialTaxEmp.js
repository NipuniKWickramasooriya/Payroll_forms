import React, { useState } from 'react';
import './SpecialTaxEmp.css';

const SpecialTaxEmpForm = () => {
  const [formData, setFormData] = useState({
    companyCode: '',
    epf: '',
    costCenter: '',
    calFormula: '',
    status: 'pending', 
    createdBy: 'currentLoggedInUserId',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const validateEPF = () => {
    const { epf } = formData;
    const costCenter = `CC:${epf.substring(0, 3)}`; 
    setFormData({ ...formData, costCenter });
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
    console.log('Form submitted:', formData);

    setFormData({
      companyCode: '',
      epf: '',
      costCenter: '',
      calFormula: '',
      status: 'pending',
      createdBy: 'currentLoggedInUserId',
    });

    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3> Special Tax Employee Form</h3>

      <label htmlFor="companyCode">Company Code:</label>
      <select
        id="companyCode"
        name="companyCode"
        value={formData.companyCode}
        onChange={handleChange}
        disabled={isEditMode}
      >
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>

      <label htmlFor="epf">EPF Number:</label>
      <input
        type="text"
        id="epf"
        name="epf"
        //value={formData.epf}
        onChange={handleChange}
      />

       <label htmlFor="costCenter">Cost Center:</label>
      <input
        type="text"
        id="costCenter"
        name="costCenter"
        value={formData.costCenter}
        readOnly
      />

      <label htmlFor="calFormula">Calculation Formula:</label>
      <input
        type="text"
        id="calFormula"
        name="calFormula"
        value={formData.calFormula}
        onChange={handleChange}
        disabled={isEditMode}
      />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        disabled={isEditMode}
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
      </select>

      <input type="hidden" id="createdBy" name="createdBy" value={formData.createdBy} />


      <button type="submit">{isEditMode ? 'Update' : 'Insert'}</button>
      <button type="button" onClick={handleEdit} disabled={isEditMode}>
        Edit
      </button>
    </form>
  );
};

export default SpecialTaxEmpForm;
