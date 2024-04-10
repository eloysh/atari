import React, { useState } from 'react';
import './MortgageCalculator.css';

function MortgageCalculator() {
  const [mortgageType, setMortgageType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [loanTermYears, setLoanTermYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');

  const handleMortgageTypeChange = (event) => {
    setMortgageType(event.target.value);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const calculateMortgage = () => {
    let monthlyInterestRate;
    let numPayments;

    if (mortgageType === 'ДВ') {
      // Расчет для дальневосточной ипотеки
      const dvInterestRate = 2.6 / 100; // 2.6% годовых
      monthlyInterestRate = dvInterestRate / 12;
      numPayments = loanTermYears * 12;
    } else if (mortgageType === 'Семейная') {
      // Расчет для семейной ипотеки
      // Ваш код для расчета семейной ипотеки
    } else if (mortgageType === 'Господдержка') {
      // Расчет для ипотеки с господдержкой
      // Ваш код для расчета ипотеки с господдержкой
    }

    const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / (Math.pow(1 + monthlyInterestRate, numPayments) - 1);
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - loanAmount;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  return (
    <div>
      <h2>Калькулятор ипотеки</h2>
      <div>
        <label htmlFor="mortgageType">Выберите тип ипотеки:</label>
        <select id="mortgageType" value={mortgageType} onChange={handleMortgageTypeChange}>
          <option value="">Выберите тип ипотеки</option>
          <option value="ДВ">Дальневосточная ипотека</option>
          <option value="Семейная">Семейная ипотека</option>
          <option value="Господдержка">Господдержка</option>
        </select>
      </div>
      {mortgageType && (
        <div>
          <h3>Расчет ипотеки: {mortgageType}</h3>
          <div className="calculator-container">
            <div className="form-group">
              <label htmlFor="loan-amount">Сумма кредита:</label>
              <input type="number" id="loan-amount" value={loanAmount} onChange={(e) => handleInputChange(e, setLoanAmount)} placeholder="Введите сумму кредита" />
            </div>
            <div className="form-group">
              <label htmlFor="annual-interest-rate">Годовая процентная ставка:</label>
              <input type="number" id="annual-interest-rate" value={annualInterestRate} onChange={(e) => handleInputChange(e, setAnnualInterestRate)} placeholder="Введите годовую процентную ставку" />
            </div>
            <div className="form-group">
              <label htmlFor="loan-term-years">Срок кредита (в годах):</label>
              <input type="number" id="loan-term-years" value={loanTermYears} onChange={(e) => handleInputChange(e, setLoanTermYears)} placeholder="Введите срок кредита" />
            </div>
            <button onClick={calculateMortgage}>Рассчитать</button>
            <div className="result">
              <strong>Ежемесячный платеж:</strong> {monthlyPayment} рублей<br />
              <strong>Общая сумма выплаты:</strong> {totalPayment} рублей<br />
              <strong>Общая сумма процентов:</strong> {totalInterest} рублей
            </div>
          </div>
          <div className="instructions">
            <h4>Инструкции по использованию калькулятора:</h4>
            <p><strong>Дальневосточная ипотека:</strong> Годовая процентная ставка - 2.6%, срок кредита - до 30 лет.</p>
            <p><strong>Семейная ипотека:</strong> Введите информацию о семье и ее доходах для расчета.</p>
            <p><strong>Ипотека с господдержкой:</strong> Проверьте условия государственной программы для расчета.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
