import React, { useState } from 'react';
import './TaxCalculation.css'; 

const TaxCalculationForm = () => {
  const [formData, setFormData] = useState({
    range: '',
    calFormula: '',
    description: '',
    status: 'active',
    createdBy: 'currentLoggedInUserId',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // submission logic here
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      range: '',
      calFormula: '',
      description: '',
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
    <form onSubmit={handleSubmit} className="tax-calculation-form">
      <h3>Tax Calculation Form</h3>
      <label htmlFor="range">Range:</label>
      <input
        type="number"
        id="range"
        name="range"
        value={formData.range}
        onChange={handleChange}
        disabled={isEditMode}
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

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
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

export default TaxCalculationForm;
