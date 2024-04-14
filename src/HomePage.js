import React, { useState } from 'react';
import './HomePage.css';
import Oprosnik from './oprosnik';
import Straniza from './Straniza';




const HomePage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBuyFormOpen, setIsBuyFormOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('characteristics');
  const [desiredArea, setDesiredArea] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [haveProject, setHaveProject] = useState('');
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=79510050002', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/buying_a_property?igsh=MWY3NnN2dTdqemQ2Zw==', '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/+79510050002', '_blank');
  };

  const openTelegramcanal = () => {
    window.open('https://t.me/buying_a_property', '_blank');
  };

 
  const properties = [




    {
      id: 1,
      title: 'Барн хаус',
      description: 'Каркасный дом',
      price: '9 000 000 рублей',
      location: 'Приморский край',
      squaremeter: '50 кв.м',
      description2: 'Застройщик акредитован, ипотека Сбербанк, Дом РФ, Маткапитал подходит.',
      images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
      characteristics: 'Характеристики: Каркасный дом, Приморский край, 50 кв.м',
      projectComposition: 'Состав проекта: А, Б, В',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 3 месяца'
    },
    {
      id: 2,
      title: 'Сакура',
      description: 'Блочный дом',
      price: '7 259 663 рублей',
      location: 'Приморский край',
      squaremeter: '120 кв.м',
      description2: 'Застройщик акредитован, ипотека Сбербанк, Дом РФ, Маткапитал подходит, строительство дома без первоначального взноса, срок строительства: коробка дома - 3 месяца, White box - 6 месяцев, подготовка участка и фасад - считаются индивидуально',
      images: ['/apartment-1.jpg', '/apartment-2.jpg', '/apartment-3.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Блочный дом, Приморский край, 120 кв.м',
      projectComposition: 'Состав проекта: X, Y, Z',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 6 месяцев'
    },
    {
      id: 3,
      title: 'Дом на берегу озера',
      description: 'Коттедж с видом на озеро',
      price: '12 500 000 рублей',
      location: 'Ленинградская область',
      squaremeter: '200 кв.м',
      description2: 'Прекрасный вид, собственный пляж',
      images: ['/apartment-5.jpg', '/apartment-6.jpg', '/apartment-7.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Коттедж, Ленинградская область, 200 кв.м',
      projectComposition: 'Состав проекта: Планировка A, B, C',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 9 месяцев'
    },
    {
      id: 4,
      title: 'Дом на берегу озера',
      description: 'Коттедж с видом на озеро',
      price: '12 500 000 рублей',
      location: 'Ленинградская область',
      squaremeter: '200 кв.м',
      description2: 'Прекрасный вид, собственный пляж',
      images: ['/apartment-5.jpg', '/apartment-6.jpg', '/apartment-7.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Коттедж, Ленинградская область, 200 кв.м',
      projectComposition: 'Состав проекта: Планировка A, B, C',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 9 месяцев'
    },
    {
      id: 5,
      title: 'Дом на берегу озера',
      description: 'Коттедж с видом на озеро',
      price: '12 500 000 рублей',
      location: 'Ленинградская область',
      squaremeter: '200 кв.м',
      description2: 'Прекрасный вид, собственный пляж',
      images: ['/apartment-5.jpg', '/apartment-6.jpg', '/apartment-7.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Коттедж, Ленинградская область, 200 кв.м',
      projectComposition: 'Состав проекта: Планировка A, B, C',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 9 месяцев'
    },
    {
      id: 6,
      title: 'Дом на берегу озера',
      description: 'Коттедж с видом на озеро',
      price: '12 500 000 рублей',
      location: 'Ленинградская область',
      squaremeter: '200 кв.м',
      description2: 'Прекрасный вид, собственный пляж',
      images: ['/apartment-5.jpg', '/apartment-6.jpg', '/apartment-7.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Коттедж, Ленинградская область, 200 кв.м',
      projectComposition: 'Состав проекта: Планировка A, B, C',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 9 месяцев'
    },
  ];


  const handleTitleClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedProperty(null);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? selectedProperty.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedProperty.images.length);
  };

  const handleCalculate = (index) => {
    setSelectedProperty(properties[index]);
    setIsOpen(true);
  };

  const handleOpenBuyForm = () => {
    setIsBuyFormOpen(true);
  };

  const handleCloseBuyForm = () => {
    setIsBuyFormOpen(false);
  };
 
  return (
    <div>
    <div className="container">
      
      <Straniza />
      <div className="tn-atom" style={{ top: '160px', left: '128px', width: '185px', height: '40px', zoom: '1.016' }}>
        
      </div>
    </div>

    <div className="homepage-container">
      <h1 className="homepage-heading">Пройди опрос и получи бесплатную консультацию!</h1>
      <Oprosnik />
      <div className="property-list"></div>
    </div>
      <div className="homepage-container">

      <h1 className="homepage-heading">КАТАЛОГ ДОМОВ ОТ НАШИХ ЗАСТРОЙЩИКОВ</h1>

        <div className="property-list">
     

          <div className="property-cards">
            {properties.map((property, index) => (
              <div key={property.id} className="property-card">
                <h3 onClick={() => handleTitleClick(property)}>{property.title}</h3>
                <p>{property.description}</p>
                <p>{property.price}</p>
                <img
                  src={property.images[0]}
                  alt="Property"
                  onClick={() => handleTitleClick(property)}
                  className="zoom-image"
                />
                <button className="calculate-btn" onClick={() => handleCalculate(index)}>
                  Подробнее
                </button>
                {isOpen && !isBuyFormOpen && (
                  <div className="modal" id="myModal">
                    <div className="modal-content">
                      <span className="close" onClick={handleCloseForm}>&times;</span>
                      <div className="gallery">
                        <img src={selectedProperty.images[imageIndex]} alt="Property" />
                        <button className="prev-btn" onClick={handlePrevImage}>{'<'}</button>
                        <button className="next-btn" onClick={handleNextImage}>{'>'}</button>
                      </div>
                      <div className="property-info">
                        <h3>{selectedProperty.title}</h3>
                        {activeTab === 'characteristics' && <p>{selectedProperty.characteristics}</p>}
                        {activeTab === 'projectComposition' && <p>{selectedProperty.projectComposition}</p>}
                        {activeTab === 'payment' && <p>{selectedProperty.payment}</p>}
                        {activeTab === 'terms' && <p>{selectedProperty.terms}</p>}
                        <div className="tabs">
                          <button className={activeTab === 'characteristics' ? 'active' : ''} onClick={() => setActiveTab('characteristics')}>Характеристики</button>
                          <button className={activeTab === 'projectComposition' ? 'active' : ''} onClick={() => setActiveTab('projectComposition')}>Состав проекта</button>
                          <button className={activeTab === 'payment' ? 'active' : ''} onClick={() => setActiveTab('payment')}>Оплата</button>
                          <button className={activeTab === 'terms' ? 'active' : ''} onClick={() => setActiveTab('terms')}>Сроки</button>
                        </div>
                        <button className="buy-btn" onClick={handleOpenBuyForm}>Рассчитать проект</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {isOpen && isBuyFormOpen && (
          <div className="modal" id="myModal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseBuyForm}>&times;</span>
              <h2>Рассчитайте стоимость строительства дома</h2>
              <p>Заполните короткую форму и наш специалист свяжется с вами и назовет ориентировочную стоимость</p>

              <div className="form-group">
                <label htmlFor="have_project">У вас уже есть проект дома?</label><br />
                <input type="radio" id="yes" name="have_project" value="yes" onChange={(e) => setHaveProject(e.target.value)} required />
                <label htmlFor="yes">Да</label><br />
                <input type="radio" id="no" name="have_project" value="no" onChange={(e) => setHaveProject(e.target.value)} required />
                <label htmlFor="no">Нет</label><br />
              </div>
              <div className="form-group">
                <label htmlFor="area">Укажите желаемую площадь дома в кв.м:</label>
                <input type="number" id="area" name="area" value={desiredArea} onChange={(e) => setDesiredArea(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              <form action="https://api.whatsapp.com/send" method="get">
                <input type="hidden" name="phone" value="+79841925069" />
                <input type="hidden" name="text" value={`Данные формы:\nУ вас есть проект дома: ${haveProject}\nПлощадь дома: ${desiredArea}\nИмя: ${name}\nТелефон: ${phone}`} />
                <button type="submit" className="submit-btn">Рассчитать</button>
              </form>

            </div>
          </div>
        )}
      </div>
      <footer className="footer">
  <div className="footer-section">
    <img src="logo1.png" alt="Логотип" />
  </div>
  <div className="footer-section">
    <h4>Недвижимость</h4>
    <ul>
      <li><a href="/search">О компании</a></li>
      <li><a href="property/:id">Контакты</a></li>
      <li><a href="mortgage">Дома</a></li>
      <li><a href="real-estate-catalog">Новостройки</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>Контакты</h4>
    <p>Телефон: +7 (123) 456-78-90</p>
  </div>
  <div className="contact">
    <h3>Контакты</h3>
    <p>Телефон: +7 (984) 192-50-69</p>
    <p>Email: eloysh8814@gmail.com</p>
    <p>Адрес: г. Владивосток, ул. Светланская, дом 65</p>
  </div>
  
  <div className="chat-buttons-container">
            <button className="whatsapp-button" onClick={openWhatsApp}>
                <img src="whatsapp.png" alt="WhatsApp" width="50" height="50"/>
                
            </button>
            <button className="telegram-button" onClick={openTelegram}>
                <img src="telegram.png" alt="Telegram" width="50" height="50"/>
             
            </button>
            <button className="instagram-button" onClick={openInstagram}>
                <img src="instagram.svg" alt="Instagram" width="50" height="50"/>
              
            </button>
            <button className="telegram-button" onClick={openTelegramcanal}>
                <img src="telegram.png" alt="Telegram" width="50" height="50"/>
          
            </button>
        </div>
 
</footer>
</div>

  );
};


export default HomePage;