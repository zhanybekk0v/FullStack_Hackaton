import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContextProvider'
import './OrderForm.css'

const OrderForm = () => {
  const {getCart} = useCart()
  const navigate = useNavigate()
  const cartCleaner = () => {
    localStorage.removeItem('cart')
    getCart()
  }
  return (
    <div class="orderForm">
      <div class="contentOrder">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Адрес</div>
            <div class="text-one">г. Бишкек</div>
            <div class="text-two">Ташибалиева 17, MAKERS</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Телефон</div>
            <div class="text-one">+996 0707 707 707</div>
            <div class="text-two">+996 0505 505 505</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">support@site.com</div>
            <div class="text-two">admin@site.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Сегодня самый лучший день для покупки потому что у нас 50% скидка йеее!!!</div>
          <p className='topic-descr'>
            Прошу заполните все поля чтобы сделать заказ на товар. Иструкция по заполнении полей внизу!   
          </p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Введите email" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Введите телефон" />
            </div>
            <div class="input-box message-box">
              <textarea placeholder="Сообщение"></textarea>
            </div>
            <div class="button" onClick={() => { cartCleaner() ; navigate('/cart')}}>
              <input type="button" value="Отправить" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderForm