import React, { useState } from 'react';
import './oprosnik.css'; 

function Oprosnik({ formData }) {
   
 
    const [selectedOption, setSelectedOption] = useState(null);
    const [houseArea, setHouseArea] = useState(50);
    const [rangeValue, setRangeValue] = useState(0);
    const [budget, setBudget] = useState(2000000);
    const [step, setStep] = useState(1);
    const [selectedOptionHouse, setSelectedOptionHouse] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const isFormValid = () => {
        return name.trim() !== '' && phoneNumber.trim() !== '';
    };
// eslint-disable-next-line no-unused-vars
const isLoading = true;
// eslint-disable-next-line no-unused-vars
const setIsLoading = (value) => {
    // ваш код
};

// eslint-disable-next-line no-unused-vars
let selectedProject = null;
// eslint-disable-next-line no-unused-vars
const setSelectedProject = (project) => {
    // ваш код
};

    const formatPhoneNumber = (value) => {
        const phoneNumberRegex = /^\d{10}$/;
        const onlyNums = value.replace(/[^\d]/g, '');

        if (onlyNums.match(phoneNumberRegex)) {
            return onlyNums.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 $2 $3-$4-$5');
        }

        return value;
    };

    const handleFormSubmit = () => {
        if (isFormValid()) {
            handleSendWhatsApp();
        } else {
            alert('Пожалуйста, заполните все поля перед отправкой.');
        }
    };

    const handleHouseAreaChange = (event) => {
        setHouseArea(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(formatPhoneNumber(event.target.value));
    };
    
    const handleChange = (event) => {
        setRangeValue(event.target.value);
    };

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const handleSelectOption = (value) => {
        setSelectedOption(value);
    };

    const handleSendWhatsApp = () => {
        let message = `Данные формы:
        Материал строительства: ${selectedOption}
        Желаемая площадь дома: ${houseArea} м²
        Удалённость от Владивостока: ${rangeValue} км
        Желаемая комплектация: ${selectedOptionHouse}
        Бюджет: ${budget.toLocaleString()} ₽
        Имя: ${name}
        Номер телефона: ${phoneNumber}`;
        
        const whatsappLink = `https://api.whatsapp.com/send?phone=79841925069&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink);
    };
 
    const handleNextStep = () => {
        if (step < 8) {
            if (step === 1 && selectedOption === null) {
                alert("Пожалуйста, выберите материал строительства.");
                return;
                
            }
            if (step === 2 && houseArea === 50) {
                alert("Пожалуйста, укажите желаемую площадь дома.");
                return;
            }
           
            if (step === 4 && rangeValue === 0) {
                alert("Пожалуйста, укажите удалённость от Владивостока.");
                return;
            }
            if (step === 5 && document.querySelector('input[name="constructionTiming"]:checked') === null) {
                alert("Пожалуйста, укажите временные рамки начала строительства.");
                return;
            }
            if (step === 6 && selectedOptionHouse === '') {
                alert("Пожалуйста, выберите желаемую комплектацию дома.");
                return;
            }
            if (step === 7 && budget === 2000000) {
                alert("Пожалуйста, укажите ваш бюджет для строительства дома.");
                return;
            }
            setStep(step + 1);
        }
    };
    const renderCheckbox = (isChecked) => {
     
        return (
            <input type="checkbox" checked={isChecked} />
        );
    };
        return ( <div>
          
            {step === 1 && (
                <div className="step-content">
                <div className="step-title">Из какого материала планируете строительство?</div>
                <div className="options">
                        <div className={`option ${selectedOption === 'karkasnyi' && 'selected'}`} onClick={() => handleSelectOption('karkasnyi')}>
                            <input type="radio" name="buildingMaterial" value="karkasnyi" />
                            <img src="1.jpg" alt="Каркасный дом" />
                            <span>Каркасный дом</span>
                            {selectedOption === 'karkasnyi' && <div className="checkmark">&#10003;</div>}
                        </div>
                        <div className={`option ${selectedOption === 'gazablok' && 'selected'}`} onClick={() => handleSelectOption('gazablok')}>
                            <input type="radio" name="buildingMaterial" value="gazablok" />
                            <img src="3.jpg" alt="Газаблок/теплоблок" />
                            <span>Газаблок/теплоблок</span>
                            {selectedOption === 'gazablok' && <div className="checkmark">&#10003;</div>}
                        </div>
                        <div className={`option ${selectedOption === 'теплый_контур' && 'selected'}`} onClick={() => handleSelectOption('теплый_контур')}>
                            <input type="radio" name="buildingMaterial" value="теплый_контур" checked={selectedOption === 'теплый_контур'} onChange={() => {}} />
                            <img src="5.jpg" alt="Теплый контур" />
                            <span>Теплый контур</span>
                            {selectedOption === 'теплый_контур' && <div className="checkmark">&#10003;</div>}
                        </div>
                       
                    </div>
                </div>
            )}
       
        






            {step === 2 && (
                <div className="step-content">
                    <div className="step-title">Укажите желаемую площадь дома</div>
                    {/* Ползунок выбора */}
                    <div className="form-field-range">
                        {/* Range slider input */}
                        <input
                            type="range"
                            min="50"
                            max="500"
                            step="50"
                            value={houseArea}
                            onChange={handleHouseAreaChange}
                        />
                        {/* Display selected value */}
                        <div className="range-value">{houseArea} м²</div>
                    </div>
                </div>
            )}
         
            {step === 3 && (
                <div className="step-content step active">
                    <div className="step-title">У вас уже есть проект дома?</div>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name="project" value="full" />
                            Есть полный проект
                        </label>
                        <label>
                            <input type="radio" name="project" value="sketch" />
                            Есть эскиз/планировка
                        </label>
                        <label>
                            <input type="radio" name="project" value="no" />
                            Нет
                        </label>
                        <label>
                            <input type="radio" name="project" value="consultation" />
                            Нужна консультация
                        </label>
                    </div>
              

                </div>
            )}
   
     {step === 4 && (
    <div className="step-content step active">
        <div className="step-title">Укажите удалённость от Владивостока</div>
        <div className="quiz-fields quiz-fields--single">
            <div className="field" data-field-id="f287c8dae" data-type="range" data-required="false">
                <div className="form-field-range">
                    <label className="form-field-title">Удалённость в км</label>
                    <div className="range-container">
                        <input
                            type="range"
                            className="range-input"
                            min="0"
                            max="200"
                            step="10"
                            value={rangeValue}
                            onChange={handleChange}
                        />
                        <output className="range-value">{rangeValue} км</output>
                    </div>
                </div>
                <div className="form-field-hidden">
                    <input type="hidden" name="fields[f287c8dae][id]" value="f287c8dae" />
                    <input type="hidden" name="fields[f287c8dae][type]" value="range" />
                    <input type="hidden" name="fields[f287c8dae][name]" value="Удалённость в км" />
                </div>
            </div>
        </div>
    </div>
    
)}

                  
                {step === 5 && (
    <div className="step-content step active">
        <div className="step-title">Когда планируете начать строительство?</div>
        <div className="quiz-fields quiz-fields--single">
            <div className="radio-group">
                <label>
                    <input type="radio" name="constructionTiming" value="soon" />
                    Уже надо
                </label>
                <label>
                    <input type="radio" name="constructionTiming" value="nextFewMonths" />
                    Ближайшие пару месяцев
                </label>
                <label>
                    <input type="radio" name="constructionTiming" value="withinYear" />
                    В течение года
                </label>
                <label>
                    <input type="radio" name="constructionTiming" value="nextYear" />
                    В следующем году
                </label>
                <label>
                    <input type="radio" name="constructionTiming" value="unknown" />
                    Пока вообще не знаю
                </label>
            </div>
        </div>
    </div>
)}

{step === 6 && (
    <div className="step-content">
    <div className="step-title">Какую комплектацию хотите?</div>
    <div className="options">
            <div className={`option ${selectedOptionHouse === 'коробка_дома' && 'selected'}`} onClick={() => setSelectedOptionHouse('коробка_дома')}>
                <img src="9.jpg" alt="Коробка дома" />
                <span>Коробка дома</span>
                {renderCheckbox(selectedOptionHouse === 'коробка_дома')}
            </div>
            <div className={`option ${selectedOptionHouse === 'теплый_контур' && 'selected'}`} onClick={() => setSelectedOptionHouse('теплый_контур')}>
                <img src="8.jpg" alt="Теплый контур" />
                <span>Теплый контур</span>
                {renderCheckbox(selectedOptionHouse === 'теплый_контур')}
            </div>
            <div className={`option ${selectedOptionHouse === 'предчистовая_отделка' && 'selected'}`} onClick={() => setSelectedOptionHouse('предчистовая_отделка')}>
                <img src="10.jpeg" alt="Предчистовая отделка" />
                <span>Предчистовая отделка</span>
                {renderCheckbox(selectedOptionHouse === 'предчистовая_отделка')}
            </div>
            <div className={`option ${selectedOptionHouse === 'под_ключ' && 'selected'}`} onClick={() => setSelectedOptionHouse('под_ключ')}>
                <img src="11.jpg" alt="Под ключ" />
                <span>Под ключ</span>
                {renderCheckbox(selectedOptionHouse === 'под_ключ')}
            </div>
            <div className={`option ${selectedOptionHouse === 'не_знаю' && 'selected'}`} onClick={() => setSelectedOptionHouse('не_знаю')}>
                <img src="12.jpg" alt="Не знаю" />
                <span>Не знаю</span>
                {renderCheckbox(selectedOptionHouse === 'не_знаю')}
            </div>
        </div>
    </div>
)}


{step === 7 && (
    <div className="step-content">
        <div className="step-title">Укажите бюджет</div>
        <div className="quiz-fields quiz-fields--single">
            <div className="field" data-field-id="budget" data-type="range" data-required="true">
                <div className="form-field-range">
                 
                    <div className="range-container">
                        <input
                            type="range"
                            className="range-input"
                            min={2000000}
                            max={15000000}
                            step="500000"
                            value={budget}
                            onChange={handleBudgetChange}
                        />
                        <output className="range-value">{budget.toLocaleString()} ₽</output>
                    </div>
                </div>
                <div className="form-field-hidden">
                    <input type="hidden" name="fields[budget][id]" value="budget" />
                    <input type="hidden" name="fields[budget][type]" value="range" />
                    <input type="hidden" name="fields[budget][name]" value="Бюджет" />
                </div>
            </div>
        </div>
    </div>
)}
{step === 8 && (
    <div className="step-content">
        <div className="step-title">Укажите ваши контактные данные</div>
        <div className="form-field">
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-field">
            <label htmlFor="phoneNumber">Номер телефона:</label>
            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div className="step-description">Пожалуйста, укажите ваше имя и номер телефона для отправки расчёта.</div>
    
        <button onClick={handleFormSubmit} disabled={!isFormValid()}>Отправить</button>
    </div>
)}


    
               
                {step < 8 && (
                    <button onClick={handleNextStep}>Далее</button>
                )}
               
             
            </div>
        );
    }
    
    export default Oprosnik;
    