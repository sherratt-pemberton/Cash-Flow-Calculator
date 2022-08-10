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
      <input type = "number">Salary</input>
      <input type = "number">Interest</input>
      <input type = "number">Dividends</input>
      <input type = "number">Real Estate/Businesses</input>
      <h4>(Interests + Dividends + Real Estate/Businesses is thge sum of your passive income)</h4>
      <input type = "number">Passive Income</input>
      <input type = "number">Total Income</input>

      <h2>Expences</h2>
      <input type = "number">Taxes</input>
      <input type = "number">Morgage/Rent Pay</input>
      <input type = "number">School Loan Pay</input>
      <input type = "number">Car Payment</input>
      <input type = "number">Credit Card Payment</input>
      <input type = "number">Retail Payment</input>
      <input type = "number">Other Expences</input>
      <input type = "number">Child Expences</input>

      <input type = "number">Per Child Expence</input>
      <input type = "number">Total Expences</input>

      <input type = "number">Monthly Cashflow</input>

      <h2>Assets</h2>

      <h2>Liabilities</h2>
      <input type = "number">Morgage</input>
      <input type = "number">School Loans</input>
      <input type = "number">Car Loans</input>
      <input type = "number">Credit Cards</input>
      <input type = "number">Retail Dept</input>

    </form>
  
  </div>
)

}