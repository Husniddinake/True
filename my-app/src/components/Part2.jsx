import React from 'react'
import Sport from '../assets/Sport.svg'
import Image1 from '../assets/Image1.svg'
import Image2 from '../assets/Image2.svg'
import Image3 from '../assets/Image3.svg'
import Image4 from '../assets/Image4.svg'
import Image5 from '../assets/Image5.svg'
import Line from '../assets/line.svg'
import Girls from '../assets/Girls.svg'
const Part1 = () => {
  return (
    <div className='bg-blue-400'>
      <p className='flex justify-center text-amber-400 '>О НАШЕМ БРЕНДЕ</p>
      <p className='text-white text-[30px] justify-center flex items-center font-medium '>TRUE - СОВЕРШЕННОE<br />ФИТНЕС-ОБОРУДОВАНИЕ</p>
      <div className="bg-no-repeat bg-cover bg-center h-[800px]"
   style={{ backgroundImage: `url(${Sport})` }}
           >
            <div className='pt-[100px] pl-[350px]'>
            <div className='w-[800px] h-[600px]  bg-white '>
              <div className='pt-[20px] pl-[130px]'>
                    <span className='text-blue-500'>Это совершенство обеспечивается высококачественными, <br /> долговечными материалами и технологиями, которые мы используем <br /> для производстве наших машин. Но оно также создается и благодаря  <br />нашей преданности клиентам и их потребностям.</span>
                    <br /> <br /> <span className='text-black'>Наша опытная команда предлагает комплексное обслуживание, <br /> начиная от планирования объекта до технического обслуживания и <br /> оснащения ваших залов новейшими технологиями. Являясь вашим <br /> надежным партнером, мы делаем все возможное, чтобы ваше <br /> предприятие продолжало эффективно работать годы и годы.</span>
                    <br />  <br /><span className='text-black'>Вы можете рассчитывать на нас в предоставлении одних из лучших <br /> услуг в отрасли. Мы ориентированы на оптимизацию срока службы  <br />вашего фитнес-оборудования. Мы всегда ищем способы расширить <br /> сферу взаимодействия с нашими клиентами, будь то предоставление <br /> учебных материалов для ваших сотрудников и инструкторов, или <br /> разработка технологических решений, отвечающих потребностям <br /> современных пользователей.</span>
                     <br /> <br /> <p className='text-blue-500 font-medium'>Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может <br /> помочь вашей компании добиться успеха.</p>
              </div>
           </div>
           </div>
           </div>
                <p className='text-[30px] text-white uppercase flex  justify-center mt-[60px]'>Наши инновации</p>
                <div className='flex flex-wrap gap-5 w-[1240px] ml-[150px] mt-[50px] '>
                  <div className='w-[400px] h-[480px]'>
                    <img src={Image1} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '>Тренажер Лестница TRUE <br /> Palisade</p>
                    <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                   <div className='w-[400px] h-[480px]'>
                    <img src={Image5} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '>Функциональный тренинг с  <br />Composite Strength</p>
                     <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                   <div className='w-[400px] h-[480px]'>
                    <img src={Image2} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '> Рамы для стрейтчинга TRUE <br /> Stretch</p>
                     <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                   <div className='w-[400px] h-[480px]'>
                    <img src={Image3} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '>Латеральный тренажер TRUE <br /> Traverse</p>
                     <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                   <div className='w-[400px] h-[480px]'>
                    <img src={Image4} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '>Беговая дорожка TRUE  <br />Alpine Runner</p>
                     <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                   <div className='w-[400px] h-[480px]'>
                    <img src={Image5} alt="" />
                    <p className='text-[22px] text-white uppercase pt-[20px] font-medium '>Эллиптический тренажер TRUE <br /> Spectrum</p>
                     <img className='pt-[30px]' src={Line} alt="" />
                  </div>
                  
                </div>
                <div className='mt-[70px]'>
                    <div className="bg-no-repeat bg-cover bg-center h-[800px]"
   style={{ backgroundImage: `url(${Girls})` }}
           > </div>
           <div className='w-[1318px] h-[618px]  bg-[rgba(18,14,14,0.37)] mt-[-700px] ml-[110px] uppercase'>
            <p className='text-[18px] text-amber-300 flex justify-center pt-[20px]'>TRUE FITNESS</p>
            <p className='text-blue-500 text-[29px] font-bold  ml-[500px] pt-[50px] text-align '> <span className='text-[white]'>Получите</span> <br /> эксклюзивное <br /> предложение <span className='text-white'>на</span> <br /> <span className='text-white'>тренажеры </span>TRUE FITNESS</p>
             <p className='text-amber-300 pt-[20px] flex justify-center text-[14px]'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
        
            <div className="justify-center flex gap-4 mt-[50px]">
          
            <input type="text" placeholder='имя'  className='w-[195px] h-[40px] text-[18px] text-black bg-gray-400 font-medium pr-[60px] pl-[20px]'/>
              <div className="relative mb-4">
                <select
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Davlatni tanlang</option>
                  <option value="+998" data-flag="uz">
                    🇺🇿 +998 - O'zbekiston
                  </option>
                  <option value="+7" data-flag="ru">
                    🇷🇺 +7 - Rossiya
                  </option>
                  <option value="+1" data-flag="us">
                    🇺🇸 +1 - AQSh
                  </option>
                  <option value="+91" data-flag="in">
                    🇮🇳 +91 - Hindiston
                  </option>
                </select>
                

              </div>
<input type="text" placeholder='E-mail'  className='w-[195px] h-[40px] text-[18px] text-black bg-gray-400 font-medium flex items-center justify-center pl-[20px]'/>



               <button className='w-[195px] h-[40px] text-[18px] text-white  bg-blue-300 font-medium '>отправить</button>
            </div>
            
          </div>
        </div>
      </div>
           
           

    
  )
}

export default Part1