import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { about_stats } from '../contants/data'
import { useProduct } from '../contexts/ProductContextProvider';
import '../Header/Header.css'

const Header = () => {
  const {getProducts } = useProduct()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search' || ''))

  useEffect(() => {
    setSearchParams({
      search: search,
    })
    getProducts()
  } ,[search])

  return (
    <div style={{marginBottom: '50px'}}>
      <div className='header-container'>
        <div className="wrapper">
          <div className="header__bg-img">
          </div>
            <div className="header__title">
              <button className='tovar-btn'>
              <span>Товары</span>
              </button>
              <button className='fabric-btn'>
            <span>Производители</span>
              </button>
            </div>
            <div className="header__inp">
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='inp-search' placeholder='Поищите что-то интересное...' />
              <button className='inp-btn'>Search</button>
            </div>
            <div >
              <p className='header-descr'>Интернет-маагазин предоставляет самые лучшие услуги, доставку быстро и безопасно!</p>
            </div>
        </div>
        <div className='about-grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text'>
                                        <h3 className='about-item-title'>{about_stat.value}</h3>
                                        <p className='about-item-descr'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
      </div>
    </div>
  )
}

export default Header