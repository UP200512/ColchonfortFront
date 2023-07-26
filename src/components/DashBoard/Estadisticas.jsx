import React from 'react';
import CardBox from './CardBox';

const Estadisticas = () => {
  const cardData = [
    {
      numbers: '1,504',
      cardName: 'Vendido',
      iconName: 'eye-outline'
    },
    {
      numbers: 'chela',
      cardName: 'El mas vendido',
      iconName: 'cart-outline'
    },
    {
      numbers: '284',
      cardName: 'Comments',
      iconName: 'chatbubbles-outline'
    },
    {
      numbers: '$7,842',
      cardName: 'Ventas',
      iconName: 'cash-outline'
    },
  ];

  return (
    <div>
      <h2>Estadísticas</h2>
      <CardBox cardData={cardData} />
    </div>
  );
};

export default Estadisticas;