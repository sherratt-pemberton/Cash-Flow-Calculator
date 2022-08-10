import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CreateProfession(){
  const dispatch = useDispatch()
  const navigate = useNavigate()

return (
  <div className = 'form-container'>\
    <form onSubmit={handleSubmit} className = 'form-body'>
      <h1>Your Profession</h1>
  
      <h2>Income</h2>
    
      <h3>Salary</h3>
      <h3>Interest</h3>
      <h3>Dividends</h3>
      <h3>Real Estate/Businesses</h3>
      <h4>(Interests + Dividends + Real Estate/Businesses is thge sum of your passive income)</h4>
      <h3>Passive Income</h3>
      <h3>Total Income</h3>

      <h2>Expences</h2>
      <h3>Taxes</h3>
      <h3>Morgage/Rent Pay</h3>
      <h3>School Loan Pay</h3>
      <h3>Car Payment</h3>
      <h3>Credit Card Payment</h3>
      <h3>Retail Payment</h3>
      <h3>Other Expences</h3>
      <h3>Child Expences</h3>

      <h3>Per Child Expence</h3>
      <h3>Total Expences</h3>

      <h3>Monthly Cashflow</h3>

      <h2>Assets</h2>

      <h2>Liabilities</h2>
    </form>
  
  </div>
)

}